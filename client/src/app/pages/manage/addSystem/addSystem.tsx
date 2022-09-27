import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../../../components/form/FormComponent'
import TextField from '../../../components/form/TextField'
import NavigateButton from '../../../components/NavigateButton'
import { useAppDispatch } from '../../../hooks/useAppReduxHooks'
import { addSystem } from '../../../store/system'
import { addSystemSchema } from '../../../validation'
import { GoArrowLeft } from 'react-icons/go'

interface IAddSystem {}

const AddSystem: React.FC<IAddSystem> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit = (data: { [key: string]: string | File }) => {
		if (data?.name && data?.fullName) {
			dispatch(
				addSystem({
					name: String(data.name),
					fullName: String(data.fullName),
				}),
			)
			navigate(-1)
		}
	}

	return (
		<Box data-testid='AddSystem' mt={3}>
			<Flex alignItems='center'>
				<NavigateButton path='/manage/system' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Новая система
				</Heading>
			</Flex>
			<FormComponent
				btnLabel='Добавить'
				validationShema={addSystemSchema}
				onSubmit={onSubmit}>
				<TextField
					label='Сокращение'
					name='name'
					placeholder='Сокращение'
				/>
				<TextField
					label='Полное наименование'
					name='fullName'
					placeholder='Полное наименование'
				/>
			</FormComponent>
		</Box>
	)
}

export default AddSystem
