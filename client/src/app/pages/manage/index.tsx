import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedManage from '../../components/ProtectedManage'
import MainLayout from '../../layouts/main'
import Department from './department'
import Home from './home'
import System from './system'

const Manage: React.FC = () => {
	return (
		<ProtectedManage>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='system/*' element={<System />} />
					<Route path='department/*' element={<Department />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</ProtectedManage>
	)
}

export default Manage
