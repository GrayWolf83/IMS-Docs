import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NavigateButton from '../../../components/NavigateButton'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppReduxHooks'
import { editSystem, getSystemById } from '../../../store/system'
import { GoArrowLeft } from 'react-icons/go'
import FormComponent from '../../../components/form/FormComponent'
import { addSystemSchema } from '../../../validation'
import TextField from '../../../components/form/TextField'

interface IEditSystem {}

const EditSystem: React.FC<IEditSystem> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const system = useAppSelector(getSystemById(String(id)))

	if (!system) {
		return <Navigate to='/manage/ststem' />
	}

	const onSubmit = (data: { [key: string]: string | File }) => {
		if (data?.name && data?.fullName) {
			dispatch(
				editSystem({
					id: system.id,
					name: String(data.name),
					fullName: String(data.fullName),
				}),
			)
			navigate(-1)
		}
	}

	return (
		<Box data-testid='EditSystem' mt={3}>
			<Flex alignItems='center'>
				<NavigateButton path='/manage/system' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Редактирование {system.name}
				</Heading>
			</Flex>
			<FormComponent
				btnLabel='Изменить'
				validationShema={addSystemSchema}
				initialData={{ ...system }}
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

export default EditSystem
