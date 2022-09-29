import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import NavigateButton from '../NavigateButton'
import { GoArrowLeft } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'

interface IPageTitle {
	title: string
	backPath: string
	addButton?: boolean
}

const PageTitle: React.FC<IPageTitle> = ({ title, backPath, addButton }) => {
	return (
		<Flex data-testid='PageTitle' alignItems='center'>
			<NavigateButton path={backPath} Icon={GoArrowLeft} />
			<Heading as='h3' ms={3} me='auto' fontSize='2xl'>
				{title}
			</Heading>
			{addButton && <NavigateButton path='add' Icon={FaPlus} />}
		</Flex>
	)
}

export default PageTitle
