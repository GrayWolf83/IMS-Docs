import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './client/login'
import Client from './client'
import Manage from './manage'
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
			{isLogin ? (
				<>
					<Route path='/*' element={<Client />} />
					<Route path='/manage/*' element={<Manage />} />
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
