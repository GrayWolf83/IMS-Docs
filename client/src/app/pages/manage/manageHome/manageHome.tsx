import React from 'react'
import { Box } from '@chakra-ui/react'
import { CgListTree } from 'react-icons/cg'
import { FaThList, FaHome, FaListAlt, FaUsers } from 'react-icons/fa'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'
import NavigateButton from '../../../components/NavigateButton'

interface IManageHome {}

const ManageHome: React.FC<IManageHome> = () => {
	return (
		<Box data-testid='ManageHome' mt={3}>
			<NavigateButton path='/' Icon={FaHome} />
			<Box mt={3}>
				<AppMenuList>
					<AppMenuItem
						path='system'
						name='Системы'
						Icon={CgListTree}
						fullName='Системы менеджмента'
					/>
					<AppMenuItem
						path='department'
						name='Структура'
						Icon={FaThList}
						fullName='Организационная структура'
					/>
					<AppMenuItem
						path='position'
						name='Позиции'
						Icon={FaListAlt}
						fullName='Список должностей'
					/>
					<AppMenuItem
						path='user'
						name='Пользователи'
						Icon={FaUsers}
						fullName='Список пользователей'
					/>
				</AppMenuList>
			</Box>
		</Box>
	)
}

export default ManageHome
