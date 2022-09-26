import React from 'react'
import { Box } from '@chakra-ui/react'
import GoHomeButton from '../../../components/GoHomeButton'
import { CgListTree } from 'react-icons/cg'
import { FaThList } from 'react-icons/fa'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'

interface IManageHome {}

const ManageHome: React.FC<IManageHome> = () => {
	return (
		<Box data-testid='ManageHome' mt={3}>
			<GoHomeButton />
			<Box mt={3}>
				<AppMenuList>
					<AppMenuItem
						path='system'
						name='Системы'
						Icon={CgListTree}
					/>
					<AppMenuItem
						path='department'
						name='Структура'
						Icon={FaThList}
					/>
				</AppMenuList>
			</Box>
		</Box>
	)
}

export default ManageHome
