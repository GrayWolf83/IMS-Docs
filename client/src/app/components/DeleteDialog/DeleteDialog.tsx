import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react'
import React from 'react'
import useColor from '../../hooks/useColor'

interface IDeleteDialog {
	onDelete: () => void
	isOpen: boolean
	onClose: () => void
	name: string
}

const DeleteDialog: React.FC<IDeleteDialog> = ({
	onDelete,
	isOpen,
	onClose,
	name,
}) => {
	const { dark, light } = useColor()
	const handleDelete = () => {
		onDelete()
		onClose()
	}

	return (
		<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent bg={dark} color={light} mx={2}>
				<ModalHeader>Удаление</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					Вы действительно хотите удалить {name}
				</ModalBody>

				<ModalFooter>
					<Button
						colorScheme='red'
						mr={3}
						onClick={handleDelete}
						variant='outline'>
						Удалить
					</Button>
					<Button onClick={onClose} variant='outline'>
						Отмена
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default DeleteDialog
