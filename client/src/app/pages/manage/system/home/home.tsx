import React from 'react'
import { Box, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { deleteSystem } from '../../../../store/system'
import { FaEdit, FaTrash } from 'react-icons/fa'
import NavigateButton from '../../../../components/NavigateButton'
import TableHead from '../../../../components/TableHead'
import DeleteDialog from '../../../../components/DeleteDialog'
import { ISystem } from '../../../../types/system'
import PageTitle from '../../../../components/PageTitle'
import useSystemsLoader from '../../../../hooks/useSystemsLoader'

interface ISystemProps {}

const Home: React.FC<ISystemProps> = () => {
	const systems = useSystemsLoader()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [deleted, setDeleted] = React.useState<ISystem | null>()
	const dispatch = useAppDispatch()

	const deleteHandler = (id: string) => {
		dispatch(deleteSystem(id))
	}

	return (
		<Box data-testid='SystemHome' mt={3}>
			<PageTitle
				title='Системы менеджмента'
				backPath='/manage'
				addButton={true}
			/>
			{Boolean(systems.length) && (
				<TableHead titles={['Наименование', 'Сокращение', 'Действия']}>
					<Tbody>
						{systems.map((system) => (
							<Tr
								key={system.id}
								fontSize='18px'
								css={{ td: { padding: 7 } }}>
								<Td>{system.fullName}</Td>
								<Td>{system.name}</Td>
								<Td>
									<NavigateButton
										path={`edit/${system.id}`}
										Icon={FaEdit}
									/>
									<NavigateButton
										onClick={() => {
											setDeleted(system)
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
