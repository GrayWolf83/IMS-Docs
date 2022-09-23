import { Box } from '@chakra-ui/react'
import React from 'react'
import GoHomeButton from '../../../components/GoHomeButton'

interface IBook {}

const Book: React.FC<IBook> = () => {
	return (
		<Box mt={3} data-testid='Book'>
			<GoHomeButton />
		</Box>
	)
}

export default Book
