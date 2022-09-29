import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PositionForm from '../../../../components/PagesForms/PositionForm'
import PageTitle from '../../../../components/PageTitle'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { editPosition, getPositionById } from '../../../../store/position'

interface IEdit {}

const Edit: React.FC<IEdit> = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const position = useAppSelector(getPositionById(String(id)))

	if (!position) {
		return <Navigate to='/manage/department' />
	}

	const handleSubmit = (data: { [key: string]: string | File }) => {
		dispatch(
			editPosition({
				id: position.id,
				name: String(data?.name),
				index: Number(data?.index),
			}),
		)
		navigate(-1)
	}

	return (
		<Box data-testid='Edit' mt={3}>
			<PageTitle
				title={`Редактирование ${position.name}`}
				backPath='/manage/position'
			/>
			<PositionForm
				onSubmit={handleSubmit}
				initialData={{ ...position, index: String(position.index) }}
			/>
		</Box>
	)
}

export default Edit
