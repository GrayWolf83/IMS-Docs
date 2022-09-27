import React from 'react'
import { Flex, GridItem, Heading, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import useColor from '../../hooks/useColor'

interface IAppMenuItem {
	path: string
	name: string
	fullName: string
	Icon: IconType
}

const AppMenuItem: React.FC<IAppMenuItem> = ({
	path,
	name,
	fullName,
	Icon,
}) => {
	const { dark, light } = useColor()

	return (
		<GridItem
			data-testid='AppMenuItem'
			w='100%'
			minHeight='100px'
			bg={dark}
			color={light}
			fontSize='32px'
			shadow='lg'
			_hover={{ opacity: 0.7 }}
			transition='all 0.2s ease-in-out'
			justifyContent='center'
			borderRadius={3}>
			<Link to={path}>
				<Flex
					alignItems='center'
					flexDirection='column'
					justifyContent='center'
					p={4}
					h='100%'>
					<Flex>
						<Icon />
						<Heading ms={3} as='h4' fontSize='24px'>
							{name}
						</Heading>
					</Flex>

					<Text fontSize='16px' textAlign='center' mt={1}>
						{fullName}
					</Text>
				</Flex>
			</Link>
		</GridItem>
	)
}

export default AppMenuItem
