import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import TextField from '../../form/TextField'
import { PositionSchema } from '../../../validation'

interface IPositionForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const PositionForm: React.FC<IPositionForm> = ({ onSubmit, initialData }) => {
	return (
		<Box data-testid='PositionForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={PositionSchema}>
				<TextField
					label='Наименование'
					name='name'
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

export default PositionForm
