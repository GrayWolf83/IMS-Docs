import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeMenuList from '../../../components/HomeMenuList'
import { FaListAlt } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { CgListTree } from 'react-icons/cg'
import HomeMenuItem from '../../../components/HomeMenuItem'

interface IHome {}

const Home: React.FC<IHome> = () => {
	return (
		<Box data-testid='Home' mt={3}>
			<HomeMenuList>
				<HomeMenuItem path='/book' name='Справочник' Icon={FaListAlt} />
				<HomeMenuItem
					path='/testing'
					name='Ознакомление'
					Icon={GiRead}
				/>
				<HomeMenuItem path='/system' name='ИСМ' Icon={CgListTree} />
				<HomeMenuItem path='/system' name='СУБ' Icon={CgListTree} />
			</HomeMenuList>
		</Box>
	)
}

export default Home
