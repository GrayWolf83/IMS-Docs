import {
	Box,
	Flex,
	Heading,
	IconButton,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import React from 'react'
import GoBackButton from '../../../components/GoBackButton'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppReduxHooks'
import { getSystemsList, loadSystemsList } from '../../../store/system'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

interface ISystem {}

const System: React.FC<ISystem> = () => {
	const systems = useAppSelector(getSystemsList())
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(loadSystemsList())
	}, [dispatch])

	return (
		<Box data-testid='System' mt={3}>
			<Flex alignItems='center'>
				<GoBackButton />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Системы менеджмента
				</Heading>
				<IconButton
					aria-label=''
					fontSize='24px'
					ms='auto'
					icon={<FaPlus />}
				/>
			</Flex>
			{Boolean(systems.length) && (
				<TableContainer mt={3}>
					<Table>
						<Thead>
							<Tr>
								<Th>Наименование</Th>
								<Th>Сокращение</Th>
								<Th>Действия</Th>
							</Tr>
						</Thead>
						<Tbody>
							{systems.map((system) => (
								<Tr key={system.id}>
									<Td>{system.fullName}</Td>
									<Td>{system.name}</Td>
									<Td>
										<IconButton
											aria-label=''
											fontSize='24px'
											icon={<FaEdit />}
										/>
										<IconButton
											aria-label=''
											fontSize='24px'
											ms={2}
											icon={<FaTrash />}
										/>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			)}
		</Box>
	)
}

export default System
