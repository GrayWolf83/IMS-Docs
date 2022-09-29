import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

interface ITableHead {
	children: React.ReactNode
	titles: string[]
}

const TableHead: React.FC<ITableHead> = ({ children, titles }) => {
	return (
		<TableContainer
			data-testid='TableHead'
			mt={3}
			css={{
				'&::-webkit-scrollbar': {
					width: '5px',
				},
				'&::-webkit-scrollbar-track': {
					width: '6px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: 'gray',
					borderRadius: '24px',
				},
			}}
			maxH='calc(100vh - 150px)'
			overflowY='auto'>
			<Table variant='striped'>
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
