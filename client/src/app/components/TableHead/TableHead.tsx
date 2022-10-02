import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import useColor from '../../hooks/useColor'

interface ITableHead {
	children: React.ReactNode
	titles: string[]
}

const TableHead: React.FC<ITableHead> = ({ children, titles }) => {
	const { light, dark } = useColor()

	return (
		<TableContainer
			data-testid='TableHead'
			color={light}
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
			<Table>
				<Thead>
					<Tr bg={dark}>
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
