import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Pages from './pages'
import theme from '../theme'
import ErrorToast from './components/ErrorToast'

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Pages />
		<ErrorToast />
	</ChakraProvider>
)
