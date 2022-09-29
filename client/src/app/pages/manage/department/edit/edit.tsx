import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editDepartment, getDepartmentById } from '../../../../store/department'
import DepartmentForm from '../../../../components/PagesForms/DepartmentForm'
import PageTitle from '../../../../components/PageTitle'

interface IEdit {}

const Edit: React.FC<IEdit> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const department = useAppSelector(getDepartmentById(String(id)))

	if (!department) {
		return <Navigate to='/manage/department' />
	}

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			editDepartment({
				id: department.id,
				name: String(data?.name),
				fullName: String(data?.fullName),
				index: Number(data?.index),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManageDepartmentEdit' mt={3}>
			<PageTitle
				title={`Редактирование ${department.name}`}
				backPath='/manage/department'
			/>
			<DepartmentForm
				onSubmit={handleSubmit}
				initialData={{ ...department, index: String(department.index) }}
			/>
		</Box>
	)
}

export default Edit
