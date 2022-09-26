import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { CgListTree } from 'react-icons/cg'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'

interface IHome {}

const Home: React.FC<IHome> = () => {
	return (
		<Box data-testid='Home' mt={3}>
			<AppMenuList>
				<AppMenuItem path='/book' name='Справочник' Icon={FaListAlt} />
				<AppMenuItem path='/test' name='Ознакомление' Icon={GiRead} />
				<AppMenuItem path='/system' name='ИСМ' Icon={CgListTree} />
				<AppMenuItem path='/system' name='СУБ' Icon={CgListTree} />
			</AppMenuList>
		</Box>
	)
}

export default Home
