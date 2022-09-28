import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import NavigateButton from '../../../components/NavigateButton'

interface IFamil {}

const Famil: React.FC<IFamil> = () => {
	return (
		<Box mt={3} data-testid='Famil'>
			<Flex alignItems='center'>
				<NavigateButton path='/' Icon={FaHome} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Ознакомление
				</Heading>
			</Flex>
		</Box>
	)
}

export default Famil
