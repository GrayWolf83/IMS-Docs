import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import { DocumentTypeSchema } from '../../../validation'
import TextField from '../../form/TextField'

interface IDocumentTypeForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const DocumentTypeForm: React.FC<IDocumentTypeForm> = ({
	onSubmit,
	initialData,
}) => {
	return (
		<Box data-testid='DocumentTypeForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={DocumentTypeSchema}>
				<TextField label='Индекс' name='index' placeholder='Индекс' />
				<TextField
					label='Описание типа'
					name='description'
					placeholder='Описание типа'
				/>
			</FormComponent>
		</Box>
	)
}

export default DocumentTypeForm
