import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../../layouts/main'
import Book from './book'
import Famil from './famil'
import Home from './home'

const Client: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='book' element={<Book />} />
				<Route path='famil' element={<Famil />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	)
}

export default Client
