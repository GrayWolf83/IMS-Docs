import { getPositionsList, loadPositionsList } from './../store/position'
import React from 'react'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'

const usePositionsLoader = () => {
	const dispatch = useAppDispatch()
	const positions = useAppSelector(getPositionsList())

	React.useEffect(() => {
		dispatch(loadPositionsList())
	}, [dispatch])

	return positions
}

export default usePositionsLoader
