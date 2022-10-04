import React from 'react'
import { getDepartmentsList, loadDepartmentList } from './../store/department'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'

const useDepartmentsLoader = () => {
	const dispatch = useAppDispatch()
	const departments = useAppSelector(getDepartmentsList())

	React.useEffect(() => {
		dispatch(loadDepartmentList())
	}, [dispatch])

	return departments
}

export default useDepartmentsLoader
