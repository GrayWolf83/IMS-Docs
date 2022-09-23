import { Grid } from '@chakra-ui/react'
import React from 'react'
import { FaListAlt } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { CgListTree } from 'react-icons/cg'
import HomeMenuItem from '../HomeMenuItem'

interface IHomeMenuList {}

const HomeMenuList: React.FC<IHomeMenuList> = () => {
	return (
		<Grid
			gap={2}
			data-testid='HomeMenuList'
			templateColumns={[
				'repeat(1, 1fr)',
				'repeat(2, 1fr)',
				'repeat(3, 1fr)',
				'repeat(4, 1fr)',
			]}>
			<HomeMenuItem path='/book' name='Справочник' Icon={FaListAlt} />
			<HomeMenuItem path='/testing' name='Ознакомление' Icon={GiRead} />
			<HomeMenuItem path='/system' name='ИСМ' Icon={CgListTree} />
			<HomeMenuItem path='/system' name='СУБ' Icon={CgListTree} />
		</Grid>
	)
}

export default HomeMenuList
