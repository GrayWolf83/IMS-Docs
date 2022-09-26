import { useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import { clearErrors, getError } from '../../store/error'

interface IErrorToast {}

const ErrorToast: React.FC<IErrorToast> = () => {
	const error = useAppSelector(getError())
	const dispatch = useAppDispatch()
	const toast = useToast()

	useEffect(() => {
		if (error) {
			toast({
				title: error,
				status: 'error',
				variant: 'solid',
				isClosable: true,
			})
			dispatch(clearErrors())
		}
	}, [error])

	return <div data-testid='ErrorToast'></div>
}

export default ErrorToast
