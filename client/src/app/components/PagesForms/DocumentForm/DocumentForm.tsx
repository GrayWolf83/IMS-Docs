import { Box } from '@chakra-ui/react'
import React from 'react'
import useDepartmentsLoader from '../../../hooks/useDepartmentsLoader'
import useSystemsLoader from '../../../hooks/useSystemsLoader'
import { DocumentSchema } from '../../../validation'
import FormComponent from '../../form/FormComponent'
import SelectField from '../../form/SelectField'
import TextField from '../../form/TextField'

interface IDocumentForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const DocumentForm: React.FC<IDocumentForm> = ({ onSubmit, initialData }) => {
	const departments = useDepartmentsLoader()
	const systems = useSystemsLoader()

	return (
		<Box data-testid='DocumentForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={DocumentSchema}>
				<TextField
					label='Индекс'
					name='index'
					placeholder='Индекс'
					type='number'
				/>
				<TextField label='Номер' name='number' placeholder='Номер' />
				<TextField
					label='Наименование'
					name='name'
					placeholder='Наименование'
				/>
				<SelectField
					label='Владелец'
					name='owner'
					items={departments}
				/>
				<SelectField
					label='Система менеджмента'
					name='system'
					items={systems}
				/>
			</FormComponent>
		</Box>
	)
}

export default DocumentForm
