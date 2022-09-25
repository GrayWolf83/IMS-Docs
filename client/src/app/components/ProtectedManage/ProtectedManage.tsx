import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppReduxHooks'
import { getCurrentUserIsManage } from '../../store/auth'

interface IProtectedManage {
	children: React.ReactNode
}

const ProtectedManage: React.FC<IProtectedManage> = ({ children }) => {
	const isManage = useAppSelector(getCurrentUserIsManage())

	return <>{isManage ? children : <Navigate to='/' />}</>
}

export default ProtectedManage
