import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DepartmentForm from '../../../../components/PagesForms/DepartmentForm'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addDepartment } from '../../../../store/department'
import PageTitle from '../../../../components/PageTitle'

interface IAdd {}

const Add: React.FC<IAdd> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addDepartment({
				name: String(data.name),
				fullName: String(data?.fullName),
				index: Number(data.index),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManageDepartmentAdd' mt={3}>
			<PageTitle
				title='Новое подразделение'
				backPath='/manage/department'
			/>
			<DepartmentForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
