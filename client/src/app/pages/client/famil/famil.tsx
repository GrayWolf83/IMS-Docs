import React from 'react'
import { Box } from '@chakra-ui/react'
import PageTitle from '../../../components/PageTitle'

interface IFamil {}

const Famil: React.FC<IFamil> = () => {
	return (
		<Box mt={3} data-testid='Famil'>
			<PageTitle title='Ознакомление' backPath='/' />
		</Box>
	)
}

export default Famil
