import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedManage from '../../components/ProtectedManage'
import MainLayout from '../../layouts/main'
import Department from './department'
import Document from './document'
import DocumentType from './documentType'
import Home from './home'
import Position from './position'
import System from './system'
import User from './user'

const Manage: React.FC = () => {
	return (
		<ProtectedManage>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='system/*' element={<System />} />
					<Route path='department/*' element={<Department />} />
					<Route path='position/*' element={<Position />} />
					<Route path='user/*' element={<User />} />
					<Route path='documentType/*' element={<DocumentType />} />
					<Route path='document/*' element={<Document />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</ProtectedManage>
	)
}

export default Manage
