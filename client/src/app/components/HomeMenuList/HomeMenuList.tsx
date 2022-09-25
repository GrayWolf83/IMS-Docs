import { Grid } from '@chakra-ui/react'
import React from 'react'

interface IHomeMenuList {
	children: React.ReactNode
}

const HomeMenuList: React.FC<IHomeMenuList> = ({ children }) => {
	return (
		<Grid
			gap={3}
			data-testid='HomeMenuList'
			templateColumns={[
				'repeat(1, 1fr)',
				'repeat(2, 1fr)',
				'repeat(3, 1fr)',
				'repeat(3, 1fr)',
			]}>
			{children}
		</Grid>
	)
}

export default HomeMenuList
