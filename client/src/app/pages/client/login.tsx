import React from 'react'
import { Box, Button, useColorMode, Heading, Flex } from '@chakra-ui/react'
import TextField from '../../components/form/TextField'

const Login: React.FC = () => {
	const { colorMode } = useColorMode()
	const [data, setData] = React.useState<{ [key: string]: string | number }>()
	const [error] = React.useState<{ [key: string]: string | null }>()

	const handleChange = (value: { [key: string]: string | number }) => {
		setData(value)
	}

	return (
		<Box
			as='form'
			width={['100%', '75%', '50%']}
			mx='auto'
			bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
			mt='50px'
			p='20px'
			borderRadius='10px'
			shadow='md'>
			<Heading textAlign='center' fontSize='3xl'>
				Авторизация
			</Heading>

			<TextField
				name='email'
				label='Email'
				error={error?.email || null}
				onChange={handleChange}
				value={data?.email || ''}
			/>

			<TextField
				name='password'
				label='Пароль'
				type='password'
				error={error?.password || null}
				onChange={handleChange}
				value={data?.password || ''}
			/>
			<Flex justifyContent='center'>
				<Button my='10px' colorScheme='gray'>
					Войти
				</Button>
			</Flex>
		</Box>
	)
}

export default Login
