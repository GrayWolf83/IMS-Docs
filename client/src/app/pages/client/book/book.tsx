import { Box, Tbody, Td, Th, Tr } from '@chakra-ui/react'
import React from 'react'
import TextField from '../../../components/form/TextField'
import PageTitle from '../../../components/PageTitle'
import TableHead from '../../../components/TableHead'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppReduxHooks'
import {
	getDepartmentsList,
	loadDepartmentList,
} from '../../../store/department'
import { getPositionsList, loadPositionsList } from '../../../store/position'
import { getUsersList, loadUsersList } from '../../../store/user'

interface IBook {}

const Book: React.FC<IBook> = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(getUsersList())
	const departments = useAppSelector(getDepartmentsList())
	const positions = useAppSelector(getPositionsList())
	const [search, setSearch] = React.useState<string>('')

	React.useEffect(() => {
		dispatch(loadUsersList())
		dispatch(loadDepartmentList())
		dispatch(loadPositionsList())
	}, [dispatch])

	const getUserPosition = (id: string) => {
		const pos = positions.find((item) => item.id === id)
		return pos?.name
	}

	const handleChange = (value: { [key: string]: string }) => {
		setSearch(Object.values(value)[0])
	}

	const searchedUsers = users.length
		? users.filter((user) =>
				user.name.toLowerCase().includes(search.toLowerCase()),
		  )
		: []

	return (
		<Box mt={3} data-testid='Book'>
			<PageTitle title='Справочник' backPath='/' />
			<TextField
				label=''
				name='search'
				placeholder='Поиск'
				value={search}
				onChange={handleChange}
			/>
			{Boolean(searchedUsers.length) && (
				<TableHead titles={['Ф.И.О.', 'Должность', 'Телефон', 'Email']}>
					<Tbody>
						{departments.map((depart) => {
							const depUsers = searchedUsers.filter(
								(user) => user.department === depart.id,
							)
							return Boolean(depUsers.length) ? (
								<React.Fragment key={depart.id}>
									<Tr
										fontSize='18px'
										css={{ td: { padding: 7 } }}>
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
										</Tr>
									))}
								</React.Fragment>
							) : null
						})}
					</Tbody>
				</TableHead>
			)}
		</Box>
	)
}

export default Book
