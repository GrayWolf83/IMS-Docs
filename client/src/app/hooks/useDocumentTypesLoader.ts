import React from 'react'
import {
	getDocumentTypesList,
	loadDocumentTypesList,
} from './../store/documentType'
import { useAppDispatch, useAppSelector } from './useAppReduxHooks'

const useDocumentTypesLoader = () => {
	const dispatch = useAppDispatch()
	const documentTypes = useAppSelector(getDocumentTypesList())

	React.useEffect(() => {
		dispatch(loadDocumentTypesList())
	}, [dispatch])

	return documentTypes
}

export default useDocumentTypesLoader
