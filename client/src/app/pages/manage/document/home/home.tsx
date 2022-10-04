import React from 'react'
import { Box, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react'
import NavigateButton from '../../../../components/NavigateButton'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../hooks/useAppReduxHooks'
import { deleteDepartment } from '../../../../store/department'
import { FaEdit, FaTrash } from 'react-icons/fa'
import DeleteDialog from '../../../../components/DeleteDialog'
import TableHead from '../../../../components/TableHead'
import PageTitle from '../../../../components/PageTitle'
import { getSystemsList } from '../../../../store/system'
import SelectField from '../../../../components/form/SelectField'
import { getDocumentsList, loadDocumentsList } from '../../../../store/document'
import { IDocument } from '../../../../types/document'

interface IHome {}

const Home: React.FC<IHome> = () => {
	const [currentSystem, setCurrentSystem] = React.useState('')
	const dispatch = useAppDispatch()
	const systems = useAppSelector(getSystemsList())
	const documents = useAppSelector(getDocumentsList())
	const [deleted, setDeleted] = React.useState<IDocument | null>()
	const { isOpen, onOpen, onClose } = useDisclosure()

	React.useEffect(() => {
		if (systems.length) {
			setCurrentSystem(systems[0].id)
		}
	}, [systems])

	React.useEffect(() => {
		if (currentSystem) {
			dispatch(loadDocumentsList(currentSystem))
		}
	}, [dispatch, currentSystem])

	const deleteHandler = (id: string) => {
		dispatch(deleteDepartment(id))
	}

	return (
		<Box data-testid='ManageDocumentHome' mt={3}>
			<PageTitle title='Документы' backPath='/manage' addButton={true} />

			<SelectField
				label='Система менеджмента'
				name='system'
				value={currentSystem}
				items={systems}
			/>

			{Boolean(documents.length) && (
				<TableHead
					titles={[
						'Индекс',
						'Сокращение',
						'Наименование',
						'Действия',
					]}>
					<Tbody>
						{documents.map((document) => (
							<Tr
								key={document.id}
								fontSize='18px'
								css={{ td: { padding: 7 } }}>
								<Td>{document.index}</Td>
								<Td>{document.number}</Td>
								<Td>{document.name}</Td>
								<Td>
									<NavigateButton
										path={`edit/${document.id}`}
										Icon={FaEdit}
									/>
									<NavigateButton
										onClick={() => {
											setDeleted(document)
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
					name={String(deleted?.name)}
					onClose={onClose}
					onDelete={() => deleteHandler(String(deleted?.id))}
				/>
			)}
		</Box>
	)
}

export default Home
