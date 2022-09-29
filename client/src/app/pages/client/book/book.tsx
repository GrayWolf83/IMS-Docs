import { Box } from '@chakra-ui/react'
import React from 'react'
import PageTitle from '../../../components/PageTitle'

interface IBook {}

const Book: React.FC<IBook> = () => {
	return (
		<Box mt={3} data-testid='Book'>
			<PageTitle title='Справочник' backPath='/' />
		</Box>
	)
}

export default Book
