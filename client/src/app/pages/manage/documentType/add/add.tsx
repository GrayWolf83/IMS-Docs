import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import PageTitle from '../../../../components/PageTitle'
import DocumentTypeForm from '../../../../components/PagesForms/DocumentTypeForm'
import { addDocumentType } from '../../../../store/documentType'

interface IAddSystem {}

const Add: React.FC<IAddSystem> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addDocumentType({
				index: String(data.index),
				description: String(data.description),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManаgeDocumentTypeAdd' mt={3}>
			<PageTitle
				title='Новый тип документа'
				backPath='/manage/documentType'
			/>
			<DocumentTypeForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
