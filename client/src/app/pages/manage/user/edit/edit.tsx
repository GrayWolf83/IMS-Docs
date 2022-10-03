import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import UserForm from '../../../../components/PagesForms/UserForm'
import PageTitle from '../../../../components/PageTitle'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editUser, getUserById } from '../../../../store/user'

interface IEdit {}

const Edit: React.FC<IEdit> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const user = useAppSelector(getUserById(String(id)))

	if (!user) {
		return <Navigate to='/manage/user' />
	}

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			editUser({
				id: user.id,
				name: String(data?.name),
				position: String(data.position),
				department: String(data.department),
				role: data.role === 'Manage' ? 'Manage' : 'User',
				phone: String(data.phone),
				email: String(data.email),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='Edit'>
			<PageTitle
				title={`Редактирование ${user.name}`}
				backPath='/manage/user'
			/>
			<UserForm onSubmit={handleSubmit} initialData={{ ...user }} />
		</Box>
	)
}

export default Edit
