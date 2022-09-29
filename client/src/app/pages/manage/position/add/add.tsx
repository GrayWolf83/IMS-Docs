import React from 'react'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PositionForm from '../../../../components/PagesForms/PositionForm'
import PageTitle from '../../../../components/PageTitle'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addPosition } from '../../../../store/position'

interface IAdd {}

const Add: React.FC<IAdd> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			addPosition({
				name: String(data.name),
				index: Number(data.index),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='ManagePositionAdd' mt={3}>
			<PageTitle title='Новая должность' backPath='/manage/position' />
			<PositionForm onSubmit={handleSubmit} />
		</Box>
	)
}

export default Add
