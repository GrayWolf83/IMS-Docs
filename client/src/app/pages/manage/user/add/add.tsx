import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserForm from '../../../../components/PagesForms/UserForm'
import PageTitle from '../../../../components/PageTitle'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addUser } from '../../../../store/user'

interface IAdd {}

const Add: React.FC<IAdd> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addUser({
				name: String(data.name),
				position: String(data?.position),
				department: String(data.department),
				phone: String(data.phone),
				email: String(data.email),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManageUserAdd' mt={3}>
			<PageTitle title='Новый пользователь' backPath='/manage/user' />
			<UserForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
