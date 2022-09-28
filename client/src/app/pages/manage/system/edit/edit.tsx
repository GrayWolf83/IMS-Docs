import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import NavigateButton from '../../../../components/NavigateButton'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editSystem, getSystemById } from '../../../../store/system'
import { GoArrowLeft } from 'react-icons/go'
import SystemForm from '../../../../components/PagesForms/SystemForm'

interface IEditSystem {}

const Edit: React.FC<IEditSystem> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const system = useAppSelector(getSystemById(String(id)))

	if (!system) {
		return <Navigate to='/manage/system' />
	}

	const onSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			editSystem({
				id: system.id,
				name: String(data.name),
				fullName: String(data.fullName),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='MangeSystemEdit' mt={3}>
			<Flex alignItems='center'>
				<NavigateButton path='/manage/system' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Редактирование {system.name}
				</Heading>
			</Flex>
			<SystemForm onSubmit={onSubmit} initialData={{ ...system }} />
		</Box>
	)
}

export default Edit
