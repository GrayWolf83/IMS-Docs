import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import TextField from '../../form/TextField'
import { DepartmentSchema } from '../../../validation'

interface IDepartmentForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const DepartmentForm: React.FC<IDepartmentForm> = ({
	onSubmit,
	initialData,
}) => {
	return (
		<Box data-testid='DepartmentForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={DepartmentSchema}>
				<TextField
					label='Сокращение'
					name='name'
					placeholder='Сокращение'
				/>
				<TextField
					label='Полное наименование'
					name='fullName'
					placeholder='Наименование'
				/>
				<TextField
					label='Индекс'
					name='index'
					placeholder='Индекс'
					type='number'
				/>
			</FormComponent>
		</Box>
	)
}

export default DepartmentForm
