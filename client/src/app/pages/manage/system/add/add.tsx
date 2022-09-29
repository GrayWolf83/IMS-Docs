import { Box } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addSystem } from '../../../../store/system'
import SystemForm from '../../../../components/PagesForms/SystemForm'
import PageTitle from '../../../../components/PageTitle'

interface IAddSystem {}

const Add: React.FC<IAddSystem> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addSystem({
				name: String(data.name),
				fullName: String(data.fullName),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManageSystemAdd' mt={3}>
			<PageTitle title='Новая система' backPath='/manage/system' />
			<SystemForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
