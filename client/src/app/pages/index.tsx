import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './client/login'
import Client from './client'
import Home from './client/home'
import Manage from './manage'
import Position from './manage/position'
import Book from './client/book'
import { useAppDispatch, useAppSelector } from '../hooks/useAppReduxHooks'
import { autologin, getCurrentUser } from '../store/auth'

const Pages: React.FC = () => {
	const dispatch = useAppDispatch()
	const isLogin = useAppSelector(getCurrentUser())

	React.useEffect(() => {
		dispatch(autologin())
	}, [dispatch])

	return (
		<Routes>
			<Route path='/' element={<Client />}>
				<Route index element={isLogin ? <Home /> : <Login />} />
				<Route path='book' element={<Book />} />
			</Route>
			<Route path='/manage' element={<Manage />}>
				<Route index element={<Position />} />
			</Route>
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default Pages
