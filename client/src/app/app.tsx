import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Pages from './pages'

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<Pages />
	</ChakraProvider>
)
