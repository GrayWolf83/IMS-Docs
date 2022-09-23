import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useColor from '../../hooks/useColor'

interface IGoHomeButton {}

const GoHomeButton: React.FC<IGoHomeButton> = () => {
	const navigate = useNavigate()
	const { dark, light } = useColor()

	const handleClick = () => {
		navigate('/')
	}

	return (
		<IconButton
			aria-label=''
			mt={3}
			variant='outline'
			data-testid='GoHomeButton'
			bg={dark}
			color={light}
			icon={<FaHome />}
			transition='all 0.2s ease-in-out'
			fontSize='24px'
			_hover={{ fontSize: '26px' }}
			onClick={handleClick}>
			<h2>GoHomeButton</h2>
		</IconButton>
	)
}

export default GoHomeButton
