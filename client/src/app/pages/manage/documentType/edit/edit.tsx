import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import PageTitle from '../../../../components/PageTitle'
import {
	editDocumentType,
	getDocumentTypeById,
} from '../../../../store/documentType'
import DocumentTypeForm from '../../../../components/PagesForms/DocumentTypeForm'

interface IEditSystem {}

const Edit: React.FC<IEditSystem> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const dt = useAppSelector(getDocumentTypeById(String(id)))

	if (!dt) {
		return <Navigate to='/manage/documentType' />
	}

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			editDocumentType({
				id: dt.id,
				index: String(data.index),
				description: String(data.description),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManageDocumentTypeEdit' mt={3}>
			<PageTitle
				title={`Редактирование ${dt.index}`}
				backPath='/manage/documentType'
			/>
			<DocumentTypeForm onSubmit={handleSubmit} initialData={{ ...dt }} />
		</Box>
	)
}

export default Edit
