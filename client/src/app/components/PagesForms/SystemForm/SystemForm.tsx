import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import TextField from '../../form/TextField'
import { SystemSchema } from '../../../validation'

interface ISystemForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const SystemForm: React.FC<ISystemForm> = ({ onSubmit, initialData }) => {
	return (
		<Box data-testid='SystemForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={SystemSchema}>
				<TextField
					label='Сокращение'
					name='name'
					placeholder='Сокращение'
				/>
				<TextField
					label='Полное наименование'
					name='fullName'
					placeholder='Полное наименование'
				/>
			</FormComponent>
		</Box>
	)
}

export default SystemForm
