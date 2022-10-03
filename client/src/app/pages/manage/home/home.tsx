import React from 'react'
import { Box } from '@chakra-ui/react'
import { CgListTree } from 'react-icons/cg'
import { FaThList, FaListAlt, FaUsers } from 'react-icons/fa'
import { HiDocumentDuplicate } from 'react-icons/hi'
import AppMenuList from '../../../components/AppMenuList'
import AppMenuItem from '../../../components/AppMenuItem'
import PageTitle from '../../../components/PageTitle'

interface IManageHome {}

const Home: React.FC<IManageHome> = () => {
	return (
		<Box data-testid='ManageHome' mt={3}>
			<PageTitle title='Управление системой' backPath='/' />
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
					<AppMenuItem
						path='documentType'
						name='Типы документов'
						Icon={HiDocumentDuplicate}
						fullName='Список типов документов'
					/>
					<AppMenuItem
						path='document'
						name='Документы'
						Icon={HiDocumentDuplicate}
						fullName='Список документов'
					/>
					<AppMenuItem
						path='form'
						name='Формы'
						Icon={HiDocumentDuplicate}
						fullName='Список форм'
					/>
				</AppMenuList>
			</Box>
		</Box>
	)
}

export default Home
