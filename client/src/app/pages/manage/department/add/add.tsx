import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigateButton from '../../../../components/NavigateButton'
import DepartmentForm from '../../../../components/PagesForms/DepartmentForm'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addDepartment } from '../../../../store/department'
import { GoArrowLeft } from 'react-icons/go'

interface IAdd {}

const Add: React.FC<IAdd> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit = (data: { [key: string]: string | File }) => {
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
			<Flex alignItems='center'>
				<NavigateButton path='/manage/department' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Новое подразделение
				</Heading>
			</Flex>
			<DepartmentForm onSubmit={onSubmit} />
		</Box>
	)
}

export default Add
