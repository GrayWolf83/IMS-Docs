import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { CgListTree } from 'react-icons/cg'
// import { IoMdInformationCircle } from 'react-icons/io'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'
import useSystemsLoader from '../../../hooks/useSystemsLoader'

interface IHome {}

const Home: React.FC<IHome> = () => {
	const systems = useSystemsLoader()

	return (
		<Box data-testid='ClientHome' mt={3}>
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
					path='/famil'
					name='Ознакомление'
					fullName='Ознакомление с ВНД'
					Icon={GiRead}
				/>
				{/* <AppMenuItem
					path='/information'
					name='База знаний'
					fullName='База знаний'
					Icon={IoMdInformationCircle}
				/> */}
			</AppMenuList>
		</Box>
	)
}

export default Home
