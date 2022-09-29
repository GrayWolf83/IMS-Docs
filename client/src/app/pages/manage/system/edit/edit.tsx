import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editSystem, getSystemById } from '../../../../store/system'
import SystemForm from '../../../../components/PagesForms/SystemForm'
import PageTitle from '../../../../components/PageTitle'

interface IEditSystem {}

const Edit: React.FC<IEditSystem> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const system = useAppSelector(getSystemById(String(id)))

	if (!system) {
		return <Navigate to='/manage/system' />
	}

	const handleSubmit = (data: { [key: string]: string | File }) => {
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
			<PageTitle
				title={`Редактирование ${system.name}`}
				backPath='/manage/system'
			/>
			<SystemForm onSubmit={handleSubmit} initialData={{ ...system }} />
		</Box>
	)
}

export default Edit
