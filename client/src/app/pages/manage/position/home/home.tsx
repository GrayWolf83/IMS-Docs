import { Box, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { FaEdit, FaTrash } from 'react-icons/fa'
import NavigateButton from '../../../../components/NavigateButton'
import TableHead from '../../../../components/TableHead'
import DeleteDialog from '../../../../components/DeleteDialog'
import PageTitle from '../../../../components/PageTitle'
import { deletePosition } from '../../../../store/position'
import { IPosition } from '../../../../types/position'
import usePositionsLoader from '../../../../hooks/usePositionsLoader'

interface IPositionProps {}

const Home: React.FC<IPositionProps> = () => {
	const positions = usePositionsLoader()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [deleted, setDeleted] = React.useState<IPosition | null>()
	const dispatch = useAppDispatch()

	const deleteHandler = (id: string) => {
		dispatch(deletePosition(id))
	}

	return (
		<Box data-testid='ManagePositionHome' mt={3}>
			<PageTitle
				title='Список должностей'
				backPath='/manage'
				addButton={true}
			/>
			{Boolean(positions.length) && (
				<TableHead titles={['Индекс', 'Наименование', 'Действия']}>
					<Tbody>
						{positions.map((item) => (
							<Tr
								key={item.id}
								fontSize='18px'
								css={{ td: { padding: 7 } }}>
								<Td>{item.index}</Td>
								<Td>{item.name}</Td>
								<Td>
									<NavigateButton
										path={`edit/${item.id}`}
										Icon={FaEdit}
									/>
									<NavigateButton
										onClick={() => {
											setDeleted(item)
											onOpen()
										}}
										Icon={FaTrash}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</TableHead>
			)}
			{Boolean(deleted) && (
				<DeleteDialog
					isOpen={isOpen}
					name={String(deleted?.name)}
					onClose={onClose}
					onDelete={() => deleteHandler(String(deleted?.id))}
				/>
			)}
		</Box>
	)
}

export default Home
