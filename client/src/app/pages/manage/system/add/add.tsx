import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigateButton from '../../../../components/NavigateButton'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { addSystem } from '../../../../store/system'
import { GoArrowLeft } from 'react-icons/go'
import SystemForm from '../../../../components/PagesForms/SystemForm'

interface IAddSystem {}

const Add: React.FC<IAddSystem> = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onSubmit = (data: { [key: string]: string | File }) => {
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
			<Flex alignItems='center'>
				<NavigateButton path='/manage/system' Icon={GoArrowLeft} />
				<Heading as='h3' ms={3} fontSize='2xl'>
					Новая система
				</Heading>
			</Flex>
			<SystemForm onSubmit={onSubmit} />
		</Box>
	)
}

export default Add
