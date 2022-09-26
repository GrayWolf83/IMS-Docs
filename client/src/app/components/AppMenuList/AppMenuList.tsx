import React from 'react'
import { Grid } from '@chakra-ui/react'

interface IAppMenuList {
	children: React.ReactNode
}

const AppMenuList: React.FC<IAppMenuList> = ({ children }) => {
	return (
		<Grid
			data-testid='AppMenuList'
			gap={3}
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

export default AppMenuList
