import {
	Box,
	Flex,
	Heading,
	Tbody,
	Td,
	Tr,
	useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { deleteSystem, getSystemsList } from '../../../../store/system'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import NavigateButton from '../../../../components/NavigateButton'
import { GoArrowLeft } from 'react-icons/go'
import TableHead from '../../../../components/TableHead'
import DeleteDialog from '../../../../components/DeleteDialog'
import { ISystem } from '../../../../types/system'

interface ISystemProps {}

const Home: React.FC<ISystemProps> = () => {
	const systems = useAppSelector(getSystemsList())
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [deleted, setDeleted] = React.useState<ISystem | null>()
	const dispatch = useAppDispatch()

	const deleteHandler = (id: string) => {
		dispatch(deleteSystem(id))
	}

	return (
		<Box data-testid='SystemHome' mt={3}>
			<Flex alignItems='center'>
				<NavigateButton path='/manage' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} me='auto' fontSize='2xl'>
					Системы менеджмента
				</Heading>
				<NavigateButton path='add' Icon={FaPlus} />
			</Flex>
			{Boolean(systems.length) && (
				<TableHead titles={['Наименование', 'Сокращение', 'Действия']}>
					<Tbody>
						{systems.map((system) => (
							<Tr key={system.id}>
								<Td fontSize='18px'>{system.fullName}</Td>
								<Td fontSize='18px'>{system.name}</Td>
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
