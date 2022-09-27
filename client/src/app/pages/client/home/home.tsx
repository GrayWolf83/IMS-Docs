import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { CgListTree } from 'react-icons/cg'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppReduxHooks'
import { getSystemsList, loadSystemsList } from '../../../store/system'

interface IHome {}

const Home: React.FC<IHome> = () => {
	const dispatch = useAppDispatch()
	const systems = useAppSelector(getSystemsList())

	React.useEffect(() => {
		dispatch(loadSystemsList())
	}, [dispatch])

	return (
		<Box data-testid='Home' mt={3}>
			<AppMenuList>
				{Boolean(systems.length) &&
					systems.map((system) => (
						<AppMenuItem
							key={system.id}
							path={`/system/${system.id}`}
							name={system.name}
							fullName={system.fullName}
							Icon={CgListTree}
						/>
					))}
				<AppMenuItem
					path='/book'
					name='Справочник'
					fullName='Справочник организации'
					Icon={FaListAlt}
				/>
				<AppMenuItem
					path='/test'
					name='Ознакомление'
					fullName='Ознакомление с ВНД'
					Icon={GiRead}
				/>
			</AppMenuList>
		</Box>
	)
}

export default Home
