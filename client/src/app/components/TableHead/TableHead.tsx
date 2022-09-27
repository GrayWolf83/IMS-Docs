import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

interface ITableHead {
	children: React.ReactNode
	titles: string[]
}

const TableHead: React.FC<ITableHead> = ({ children, titles }) => {
	return (
		<TableContainer data-testid='TableHead' mt={3}>
			<Table>
				<Thead>
					<Tr>
						{titles.map((title) => (
							<Th key={title}>{title}</Th>
						))}
					</Tr>
				</Thead>
				{children}
			</Table>
		</TableContainer>
	)
}

export default TableHead
