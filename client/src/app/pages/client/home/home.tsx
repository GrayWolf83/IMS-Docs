import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeMenuList from '../../../components/HomeMenuList'

interface IHome {}

const Home: React.FC<IHome> = () => {
	return (
		<Box data-testid='Home' mt={3}>
			<HomeMenuList />
		</Box>
	)
}

export default Home
