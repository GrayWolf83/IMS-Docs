import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import NavigateButton from '../NavigateButton'
import { GoArrowLeft } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import useColor from '../../hooks/useColor'

interface IPageTitle {
	title: string
	backPath: string
	addButton?: boolean
}

const PageTitle: React.FC<IPageTitle> = ({ title, backPath, addButton }) => {
	const { light } = useColor()

	return (
		<Flex data-testid='PageTitle' alignItems='center'>
			<NavigateButton path={backPath} Icon={GoArrowLeft} />
			<Heading as='h3' ms={3} me='auto' fontSize='2xl' color={light}>
				{title}
			</Heading>
			{addButton && <NavigateButton path='add' Icon={FaPlus} />}
		</Flex>
	)
}

export default PageTitle
