import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import PageTitle from '../../../../components/PageTitle'
import DocumentForm from '../../../../components/PagesForms/DocumentForm'
import { addDocument } from '../../../../store/document'

interface IAdd {}

const Add: React.FC<IAdd> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addDocument({
				index: Number(data.index),
				number: String(data.name),
				name: String(data.name),
				owner: String(data.owner),
				system: String(data.system),
				familiarity: String(data.familiarity).split(' '),
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
