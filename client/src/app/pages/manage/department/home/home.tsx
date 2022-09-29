import React from 'react'
import { Box, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react'
import NavigateButton from '../../../../components/NavigateButton'
import { useAppDispatch, useAppSelector} from '../../../../hooks/useAppReduxHooks'
import { deleteDepartment, getDepartmentsList, loadDepartmentList } from '../../../../store/department'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IDepartment } from '../../../../types/department'
import DeleteDialog from '../../../../components/DeleteDialog'
import TableHead from '../../../../components/TableHead'
import PageTitle from '../../../../components/PageTitle'

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
			<PageTitle
				title='Структурные подразделения'
				backPath='/manage'
				addButton={true}
			/>

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
							<Tr
								key={department.id}
								fontSize='18px'
								css={{ td: { padding: 7 } }}>
								<Td>{department.index}</Td>
								<Td>{department.name}</Td>
								<Td>{department.fullName}</Td>
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
