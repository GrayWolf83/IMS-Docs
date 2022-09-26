import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import useColor from '../../hooks/useColor'

interface IGoBackButton {}

const GoBackButton: React.FC<IGoBackButton> = () => {
	const navigate = useNavigate()
	const { dark, light } = useColor()

	const handleClick = () => {
		navigate(-1)
	}
	return (
		<IconButton
			data-testid='GoBackButton'
			variant='outline'
			icon={<GoArrowLeft />}
			bg={dark}
			color={light}
			aria-label=''
			transition='all 0.2s ease-in-out'
			fontSize='24px'
			_hover={{ opacity: 0.7 }}
			onClick={handleClick}
		/>
	)
}

export default GoBackButton
