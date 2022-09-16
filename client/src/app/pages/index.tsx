import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './client/login'
import Client from './client'
import Home from './client/home'
import Manage from './manage'
import Position from './manage/position'

const Pages: React.FC = () => {
	const isLogin = false

	return (
		<Routes>
			<Route path='/' element={<Client />}>
				<Route index element={isLogin ? <Home /> : <Login />} />
			</Route>
			<Route path='/manage' element={<Manage />}>
				<Route index element={<Position />} />
			</Route>
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default Pages
