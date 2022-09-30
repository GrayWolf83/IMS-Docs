import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import TextField from '../../form/TextField'
import { UserSchema } from '../../../validation'
import { IPosition } from '../../../types/position'
import { IDepartment } from '../../../types/department'
import SelectField from '../../form/SelectField'

interface IUserForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
	positions: IPosition[]
	departments: IDepartment[]
}

const UserForm: React.FC<IUserForm> = ({
	onSubmit,
	initialData,
	positions,
	departments,
}) => {
	return (
		<Box data-testid='UserForm'>
			<FormComponent
				btnLabel='Сохранить'
				initialData={initialData}
				onSubmit={onSubmit}
				validationShema={UserSchema}>
				<TextField label='Ф.И.О.' name='name' placeholder='Ф.И.О.' />
				<SelectField
					name='department'
					label='Подразделение'
					items={departments}
				/>
				<SelectField
					name='position'
					label='Должность'
					items={positions}
				/>

				<TextField label='Телефон' name='phone' placeholder='Телефон' />
				<TextField label='Email' name='email' placeholder='Email' />
			</FormComponent>
		</Box>
	)
}

export default UserForm
