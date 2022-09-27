import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './client/login'
import Client from './client'
import Home from './client/home'
import Manage from './manage'
import ManageHome from './manage/manageHome'
import Book from './client/book'
import { useAppDispatch, useAppSelector } from '../hooks/useAppReduxHooks'
import { autologin, getCurrentUser } from '../store/auth'
import System from './manage/system'
import AddSystem from './manage/addSystem'
import EditSystem from './manage/editSystem'

const Pages: React.FC = () => {
	const dispatch = useAppDispatch()
	const isLogin = useAppSelector(getCurrentUser())

	React.useEffect(() => {
		dispatch(autologin())
	}, [dispatch])

	return (
		<Routes>
			{isLogin ? (
				<>
					<Route path='/' element={<Client />}>
						<Route index element={<Home />} />
						<Route path='book' element={<Book />} />
					</Route>
					<Route path='/manage' element={<Manage />}>
						<Route index element={<ManageHome />} />
						<Route path='system' element={<System />} />
						<Route path='system/add' element={<AddSystem />} />
						<Route
							path='system/edit/:id'
							element={<EditSystem />}
						/>
					</Route>
					<Route path='*' element={<Navigate to='/' />} />
				</>
			) : (
				<>
					<Route path='/' element={<Login />} />
					<Route path='*' element={<Navigate to='/' />} />
				</>
			)}
		</Routes>
	)
}

export default Pages
