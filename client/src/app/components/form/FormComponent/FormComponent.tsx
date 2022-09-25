import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'

interface IFormComponent {
	initialData?: { [key: string]: string }
	onSubmit: (data: FormData) => void
	btnLabel: string
	children: React.ReactNode
	validationShema: any
}

const FormComponent: React.FC<IFormComponent> = ({
	initialData,
	onSubmit,
	btnLabel,
	children,
	validationShema,
}) => {
	const [data, setData] = React.useState<{
		[key: string]: string | File
	}>({})
	const [error, setError] = React.useState<{ [key: string]: string }>({})
	const { colorMode } = useColorMode()

	React.useEffect(() => {
		if (initialData) {
			setData(initialData)
		}

		return () => setData({})
	}, [initialData])

	const validation = React.useCallback(() => {
		validationShema
			.validate(data)
			.then(() => setError({}))
			.catch((err: { message: { name: string; text: string } }) =>
				setError({ [err.message.name]: err.message.text }),
			)
	}, [validationShema, data])

	React.useEffect(() => {
		if (Object.keys(data).length) validation()
	}, [data, validation])

	const changeHandler = (value: { [key: string]: string | File }) => {
		setData((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		validation()
		delete error?.undefined
		if (!Object.keys(error).length && Object.keys(data).length) {
			const formData = new FormData()

			Object.entries(data).forEach((item) => {
				formData.append(item[0], item[1])
			})

			onSubmit(formData)
		} else {
			// toast.warning('Заполните все поля формы')
		}
	}

	return (
		<Box
			data-testid='FormComponent'
			width={['100%', '75%', '50%']}
			mx='auto'
			bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			mt='50px'
			p='20px'
			borderRadius='10px'
			shadow='md'>
			<form
				onSubmit={submitHandler}
				encType='multipart/form-data'
				style={{ width: '100%' }}>
				{React.Children.map(children, (child: any) => {
					const config = {
						...child.props,
						onChange: changeHandler,
						value: data[child.props.name],
						error: error[child?.props?.name],
					}

					return React.cloneElement(child, config)
				})}

				<Flex justifyContent='center'>
					<Button my='10px' colorScheme='gray' type='submit'>
						{btnLabel}
					</Button>
				</Flex>
			</form>
		</Box>
	)
}

export default FormComponent
