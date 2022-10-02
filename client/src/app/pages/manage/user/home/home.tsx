import { Box, Tbody, Td, Th, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { FaEdit, FaTrash } from 'react-icons/fa'
import NavigateButton from '../../../../components/NavigateButton'
import TableHead from '../../../../components/TableHead'
import DeleteDialog from '../../../../components/DeleteDialog'
import PageTitle from '../../../../components/PageTitle'
import { deleteUser, getUsersList, loadUsersList } from '../../../../store/user'
import {
	getDepartmentsList,
	loadDepartmentList,
} from '../../../../store/department'
import { getPositionsList, loadPositionsList } from '../../../../store/position'
import { IUser } from '../../../../types/user'
import useColor from '../../../../hooks/useColor'

interface ISystemProps {}

const Home: React.FC<ISystemProps> = () => {
	const users = useAppSelector(getUsersList())
	const departments = useAppSelector(getDepartmentsList())
	const positions = useAppSelector(getPositionsList())
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [deleted, setDeleted] = React.useState<IUser | null>()
	const dispatch = useAppDispatch()
	const { dark } = useColor()

	const deleteHandler = (id: string) => {
		dispatch(deleteUser(id))
	}

	const getUserPosition = (id: string) => {
		const pos = positions.find((item) => item.id === id)
		return pos?.name
	}

	React.useEffect(() => {
		dispatch(loadUsersList())
		dispatch(loadDepartmentList())
		dispatch(loadPositionsList())
	}, [dispatch])

	return (
		<Box data-testid='SystemHome' mt={3}>
			<PageTitle
				title='Список пользователей'
				backPath='/manage'
				addButton={true}
			/>
			{Boolean(users.length) && (
				<TableHead
					titles={[
						'Ф.И.О.',
						'Должность',
						'Телефон',
						'Email',
						'Роль',
						'Действия',
					]}>
					<Tbody>
						{departments.map((depart) => {
							const depUsers = users.filter(
								(user) => user.department === depart.id,
							)
							return Boolean(depUsers.length) ? (
								<React.Fragment key={depart.id}>
									<Tr
										fontSize='18px'
										css={{ td: { padding: 7 } }}
										bg={dark}>
										<Th colSpan={6}>{depart.fullName}</Th>
									</Tr>
									{depUsers.map((user) => (
										<Tr
											key={user.id}
											fontSize='18px'
											css={{ td: { padding: 7 } }}>
											<Td>{user.name}</Td>
											<Td>
												{getUserPosition(user.position)}
											</Td>
											<Td>{user.phone}</Td>
											<Td>{user.email}</Td>
											<Td>
												{user.role === 'User'
													? 'Пользователь'
													: 'Менеджер'}
											</Td>
											<Td>
												<NavigateButton
													path={`edit/${user.id}`}
													Icon={FaEdit}
												/>
												<NavigateButton
													onClick={() => {
														setDeleted(user)
														onOpen()
													}}
													Icon={FaTrash}
												/>
											</Td>
										</Tr>
									))}
								</React.Fragment>
							) : null
						})}
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
