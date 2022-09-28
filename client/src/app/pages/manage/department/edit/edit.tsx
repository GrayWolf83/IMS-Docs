import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import NavigateButton from '../../../../components/NavigateButton'
import { GoArrowLeft } from 'react-icons/go'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editDepartment, getDepartmentById } from '../../../../store/department'
import DepartmentForm from '../../../../components/PagesForms/DepartmentForm'

interface IEdit {}

const Edit: React.FC<IEdit> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const department = useAppSelector(getDepartmentById(String(id)))

	if (!department) {
		return <Navigate to='/manage/department' />
	}

	const onSubmit = (data: { [key: string]: string | File }) => {
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
			<Flex alignItems='center'>
				<NavigateButton path='/manage/department' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Редактирование {department.name}
				</Heading>
			</Flex>
			<DepartmentForm
				onSubmit={onSubmit}
				initialData={{ ...department, index: String(department.index) }}
			/>
		</Box>
	)
}

export default Edit
