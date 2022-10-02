import { Box } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../form/FormComponent'
import TextField from '../../form/TextField'
import { UserSchema } from '../../../validation'
import SelectField from '../../form/SelectField'
import { useAppSelector } from '../../../hooks/useAppReduxHooks'
import { getPositionsList } from '../../../store/position'
import { getDepartmentsList } from '../../../store/department'

interface IUserForm {
	onSubmit: (data: { [key: string]: string | File }) => void
	initialData?: { [key: string]: string | File }
}

const UserForm: React.FC<IUserForm> = ({ onSubmit, initialData }) => {
	const positions = useAppSelector(getPositionsList())
	const departments = useAppSelector(getDepartmentsList())

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
				{Boolean(initialData) ? (
					<SelectField
						name='role'
						label='Роль'
						items={[
							{ id: 'User', name: 'User' },
							{ id: 'Manage', name: 'Manage' },
						]}
					/>
				) : (
					<></>
				)}

				<TextField label='Телефон' name='phone' placeholder='Телефон' />
				<TextField label='Email' name='email' placeholder='Email' />
			</FormComponent>
		</Box>
	)
}

export default UserForm
