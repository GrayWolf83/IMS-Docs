import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import GoHomeButton from '../../../components/GoHomeButton'

interface IBook {}

const Book: React.FC<IBook> = () => {
	return (
		<Box mt={3} data-testid='Book'>
			<Flex alignItems='center'>
				<GoHomeButton />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Справочник
				</Heading>
			</Flex>
		</Box>
	)
}

export default Book
