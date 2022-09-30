import React from 'react'
import {
	FormControl,
	FormLabel,
	Input,
	Flex,
	IconButton,
	FormErrorMessage,
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import useColor from '../../../hooks/useColor'

interface IProps {
	error?: string | null
	label: string
	name: string
	type?: string
	onChange?: (value: { [key: string]: string }) => void
	value?: string
	placeholder: string
}

const TextField: React.FC<IProps> = ({
	name,
	error,
	label,
	type = 'text',
	onChange,
	value,
	placeholder,
}) => {
	const { light } = useColor()
	const [passVisible, setPassVisible] = React.useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange({ [e.target.name]: e.target.value })
		}
	}

	return (
		<FormControl
			data-testid='TextField'
			my='20px'
			isInvalid={Boolean(error)}>
			<FormLabel>{label}</FormLabel>
			<Flex>
				<Input
					autoComplete={name}
					name={name}
					borderColor={light}
					_focusVisible={{
						borderColor: 'none',
					}}
					_hover={{
						borderColor: light,
					}}
					placeholder={placeholder}
					onChange={handleChange}
					value={value}
					type={
						type === 'password'
							? passVisible
								? 'text'
								: 'password'
							: type
					}
				/>
				{type === 'password' && (
					<IconButton
						size='md'
						fontSize='lg'
						variant='outline'
						borderColor={light}
						color='current'
						marginLeft='1'
						aria-label=''
						onClick={() => setPassVisible(!passVisible)}
						icon={
							passVisible ? (
								<FaEyeSlash fontSize='24px' />
							) : (
								<FaEye fontSize='24px' />
							)
						}
					/>
				)}
			</Flex>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}

export default TextField
