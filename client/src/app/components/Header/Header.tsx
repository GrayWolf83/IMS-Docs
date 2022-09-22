import React from 'react'
import {
	Flex,
	Box,
	Container,
	Heading,
	useColorMode,
	IconButton,
} from '@chakra-ui/react'
import { FcManager } from 'react-icons/fc'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ColorModeSwitcher from '../ColorModeSwitcher'

const Header: React.FC = () => {
	const { colorMode } = useColorMode()
	const isLogin = true

	return (
		<Box
			data-testid='Header'
			as='header'
			py='3'
			bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}>
			<Container maxW='container.xl'>
				<Flex justifyContent='space-between'>
					<Link to='/'>
						<Heading>e-IMS</Heading>
					</Link>

					<Flex alignItems='center'>
						<ColorModeSwitcher />
						{isLogin && (
							<>
								<IconButton
									size='md'
									fontSize='lg'
									variant='outline'
									color='current'
									marginLeft='2'
									aria-label=''
									icon={<FcManager fontSize='24px' />}
								/>
								<IconButton
									size='md'
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
