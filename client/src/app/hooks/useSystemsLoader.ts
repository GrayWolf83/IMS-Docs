import React from 'react'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'
import { getSystemsList, loadSystemsList } from '../store/system'

const useSystemsLoader = () => {
	const dispatch = useAppDispatch()
	const systems = useAppSelector(getSystemsList())

	React.useEffect(() => {
		dispatch(loadSystemsList())
	}, [dispatch])

	return systems
}

export default useSystemsLoader
