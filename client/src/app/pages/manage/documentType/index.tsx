import Home from './home'
import Add from './add'
import Edit from './edit'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

const DocumentType = () => {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
				<Route path='add' element={<Add />} />
				<Route path='edit/:id' element={<Edit />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	)
}

export default DocumentType
