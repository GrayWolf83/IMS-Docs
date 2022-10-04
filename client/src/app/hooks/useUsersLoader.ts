import React from 'react'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'
import { getUsersList, loadUsersList } from '../store/user'

const useUsersLoader = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector(getUsersList())

	React.useEffect(() => {
		dispatch(loadUsersList())
	}, [dispatch])

	return users
}

export default useUsersLoader
