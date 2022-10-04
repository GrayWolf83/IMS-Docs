import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addDepartment } from '../../../../store/department'
import PageTitle from '../../../../components/PageTitle'
import DocumentForm from '../../../../components/PagesForms/DocumentForm'

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
		<Box data-testid='ManageDocumentAdd' mt={3}>
			<PageTitle title='Новый документ' backPath='/manage/document' />
			<DocumentForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
