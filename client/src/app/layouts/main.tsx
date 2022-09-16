import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<Container maxW='container.xl'>
				<Outlet />
			</Container>
		</>
	)
}

export default MainLayout
