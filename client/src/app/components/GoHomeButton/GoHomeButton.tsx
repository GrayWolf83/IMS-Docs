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
			variant='outline'
			data-testid='GoHomeButton'
			bg={dark}
			color={light}
			icon={<FaHome />}
			transition='all 0.2s ease-in-out'
			fontSize='24px'
			_hover={{ opacity: 0.7 }}
			onClick={handleClick}
		/>
	)
}

export default GoHomeButton
