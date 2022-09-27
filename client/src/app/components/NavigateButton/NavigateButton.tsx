import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { useNavigate } from 'react-router-dom'
import useColor from '../../hooks/useColor'

interface INavigateButton {
	path?: string
	onClick?: () => void
	Icon: IconType
}

const NavigateButton: React.FC<INavigateButton> = ({ path, Icon, onClick }) => {
	const navigate = useNavigate()
	const { dark, light } = useColor()

	const handleClick = () => {
		if (path) {
			navigate(path)
		}
		if (onClick) {
			onClick()
		}
	}

	return (
		<IconButton
			data-testid='NavigateButton'
			aria-label=''
			icon={<Icon />}
			variant='outline'
			onClick={handleClick}
			bg={dark}
			color={light}
			m={1}
			transition='all 0.2s ease-in-out'
			fontSize='24px'
			_hover={{ opacity: 0.7 }}
		/>
	)
}

export default NavigateButton
