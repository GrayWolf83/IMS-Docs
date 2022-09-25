import React from 'react'
import {
	Flex,
	Box,
	Container,
	Heading,
	useColorMode,
	IconButton,
} from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import ColorModeSwitcher from '../ColorModeSwitcher'
import { useAppDispatch, useAppSelector } from '../../hooks/useAppReduxHooks'
import {
	getCurrentUser,
	getCurrentUserIsManage,
	logout,
} from '../../store/auth'

const Header: React.FC = () => {
	const { colorMode } = useColorMode()
	const dispatch = useAppDispatch()
	const isLogin = useAppSelector(getCurrentUser())
	const isManage = useAppSelector(getCurrentUserIsManage())
	const navigate = useNavigate()

	return (
		<Box
			data-testid='Header'
			as='header'
			py='3'
			bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}>
			<Container maxW='container.xl'>
				<Flex justifyContent='space-between'>
					<Link to='/'>
						<Heading>IMS-Docs</Heading>
					</Link>

					<Flex alignItems='center'>
						<ColorModeSwitcher />
						{isManage && (
							<IconButton
								size='md'
								onClick={() => navigate('/manage')}
								fontSize='lg'
								variant='outline'
								color='current'
								marginLeft='2'
								aria-label=''
								icon={<AiFillSetting fontSize='24px' />}
							/>
						)}
						{isLogin && (
							<>
								<IconButton
									size='md'
									onClick={() => dispatch(logout())}
									fontSize='lg'
									variant='outline'
									color='current'
									marginLeft='2'
									aria-label=''
									icon={<FiLogOut fontSize='24px' />}
								/>
							</>
						)}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
