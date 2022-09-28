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
import NavigateButton from '../../../../components/NavigateButton'
import { GoArrowLeft } from 'react-icons/go'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import {
	deleteDepartment,
	getDepartmentsList,
	loadDepartmentList,
} from '../../../../store/department'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import { IDepartment } from '../../../../types/department'
import DeleteDialog from '../../../../components/DeleteDialog'
import TableHead from '../../../../components/TableHead'

interface IHome {}

const Home: React.FC<IHome> = () => {
	const dispatch = useAppDispatch()
	const departments = useAppSelector(getDepartmentsList())
	const [deleted, setDeleted] = React.useState<IDepartment | null>()
	const { isOpen, onOpen, onClose } = useDisclosure()

	React.useEffect(() => {
		dispatch(loadDepartmentList())
	}, [dispatch])

	const deleteHandler = (id: string) => {
		dispatch(deleteDepartment(id))
	}

	return (
		<Box data-testid='ManageDepartmentHome' mt={3}>
			<Flex alignItems='center'>
				<NavigateButton path='/manage' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} me='auto' fontSize='2xl'>
					Структурные подразделения
				</Heading>
				<NavigateButton path='add' Icon={FaPlus} />
			</Flex>

			{Boolean(departments.length) && (
				<TableHead
					titles={[
						'Индекс',
						'Сокращение',
						'Наименование',
						'Действия',
					]}>
					<Tbody>
						{departments.map((department) => (
							<Tr key={department.id}>
								<Td fontSize='18px'>{department.index}</Td>
								<Td fontSize='18px'>{department.name}</Td>
								<Td fontSize='18px'>{department.fullName}</Td>
								<Td>
									<NavigateButton
										path={`edit/${department.id}`}
										Icon={FaEdit}
									/>
									<NavigateButton
										onClick={() => {
											setDeleted(department)
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
