import { Box } from '@chakra-ui/react'
import React from 'react'
import GoHomeButton from '../../../components/GoHomeButton'
import HomeMenuItem from '../../../components/HomeMenuItem'
import HomeMenuList from '../../../components/HomeMenuList'
import { CgListTree } from 'react-icons/cg'
import { FaThList } from 'react-icons/fa'

interface IManage {}

const ManageHome: React.FC<IManage> = () => {
	return (
		<Box data-testid='Manage' mt={3}>
			<GoHomeButton />
			<Box mt={3}>
				<HomeMenuList>
					<HomeMenuItem
						path='system'
						name='Системы'
						Icon={CgListTree}
					/>
					<HomeMenuItem
						path='department'
						name='Структура'
						Icon={FaThList}
					/>
				</HomeMenuList>
			</Box>
		</Box>
	)
}

export default ManageHome
