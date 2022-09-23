import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Pages from './pages'
import theme from '../theme'

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Pages />
	</ChakraProvider>
)
