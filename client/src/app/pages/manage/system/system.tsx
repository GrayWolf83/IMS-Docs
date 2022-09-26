import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import GoBackButton from '../../../components/GoBackButton'

interface ISystem {}

const System: React.FC<ISystem> = () => {
	return (
		<Box data-testid='System' mt={3}>
			<Flex alignItems='center'>
				<GoBackButton />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Системы менеджмента
				</Heading>
			</Flex>
		</Box>
	)
}

export default System
