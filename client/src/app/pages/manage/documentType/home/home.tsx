import { Box, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useAppDispatch } from '../../../../hooks/useAppReduxHooks'
import { FaEdit, FaTrash } from 'react-icons/fa'
import NavigateButton from '../../../../components/NavigateButton'
import TableHead from '../../../../components/TableHead'
import DeleteDialog from '../../../../components/DeleteDialog'
import PageTitle from '../../../../components/PageTitle'
import { deleteDocumentType } from '../../../../store/documentType'
import { IDocumentType } from '../../../../types/documentType'
import useDocumentTypesLoader from '../../../../hooks/useDocumentTypesLoader'

interface ISystemProps {}

const Home: React.FC<ISystemProps> = () => {
	const documentTypes = useDocumentTypesLoader()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [deleted, setDeleted] = React.useState<IDocumentType | null>()
	const dispatch = useAppDispatch()

	const deleteHandler = (id: string) => {
		dispatch(deleteDocumentType(id))
	}

	return (
		<Box data-testid='ManageDocumentTypeHome' mt={3}>
			<PageTitle
				title='Типы документов'
				backPath='/manage'
				addButton={true}
			/>
			{Boolean(documentTypes.length) && (
				<TableHead titles={['Индекс', 'Описание', 'Действия']}>
					<Tbody>
						{documentTypes.map((dt) => (
							<Tr
								key={dt.id}
								fontSize='18px'
								css={{ td: { padding: 7 } }}>
								<Td>{dt.index}</Td>
								<Td>{dt.description}</Td>
								<Td>
									<NavigateButton
										path={`edit/${dt.id}`}
										Icon={FaEdit}
									/>
									<NavigateButton
										onClick={() => {
											setDeleted(dt)
											onOpen()
										}}
										Icon={FaTrash}
									/>
								</Td>
							</Tr>
						))}
					</Tbody>
				</TableHead>
			)}
			{Boolean(deleted) && (
				<DeleteDialog
					isOpen={isOpen}
					name={String(deleted?.index)}
					onClose={onClose}
					onDelete={() => deleteHandler(String(deleted?.id))}
				/>
			)}
		</Box>
	)
}

export default Home
