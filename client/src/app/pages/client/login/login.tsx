import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import FormComponent from '../../../components/form/FormComponent'
import TextField from '../../../components/form/TextField'
import { useAppDispatch } from '../../../hooks/useAppReduxHooks'
import { loginSchema } from '../../../validation'
import { login } from '../../../store/auth'
import Header from '../../../components/Header'

interface ILogin {}

const Login: React.FC<ILogin> = () => {
	const dispatch = useAppDispatch()

	const handleSubmit = (data: FormData) => {
		dispatch(login(data))
	}

	return (
		<>
			<Header />
			<Box data-testid='Login' w='100%' mt='5'>
				<Heading textAlign='center' fontSize='3xl'>
					Авторизация
				</Heading>
				<FormComponent
					btnLabel='Войти'
					validationShema={loginSchema}
					onSubmit={handleSubmit}>
					<TextField name='email' label='Email' />
					<TextField name='password' type='password' label='Пароль' />
				</FormComponent>
			</Box>
		</>
	)
}

export default Login
