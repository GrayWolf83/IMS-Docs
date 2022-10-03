import express from 'express'
import Document from '../../models/Document'
import { IDocumentType } from '../../types/DocumentType'
import DocumentType from '../../models/DocumentType'

const router = express.Router()
const msgName = 'Тип документа'

router.get('/', async (req, res) => {
	try {
		const dt: IDocumentType[] = await DocumentType.findAll()

		res.status(200).send(dt)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { index, description } = req.body

		const isWithThisName: IDocumentType = await DocumentType.findOne({
			where: { index },
		})

		if (isWithThisName) {
			return res.status(400).send({
				message: `${msgName} ${index} уже существует`,
				code: 400,
			})
		}

		const dt: IDocumentType[] = await DocumentType.create({
			index,
			description,
		})

		res.status(201).send(dt)
	} catch (error) {
		console.log(error)
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id
	const { index, description } = req.body
	try {
		const oldItem: IDocumentType = await DocumentType.findOne({
			where: { id },
		})

		if (!oldItem) {
			return res.status(400).send({
				message: `${msgName} ${index} не существует`,
				code: 400,
			})
		} else {
			await DocumentType.update({ index, description }, { where: { id } })
		}

		const dt: IDocumentType = await DocumentType.findOne({
			where: { id },
		})

		res.status(200).send(dt)
	} catch (error) {
		console.log(error)
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id

	try {
		const dt: IDocumentType = await DocumentType.findOne({
			where: { id },
		})

		if (!dt) {
			return res.status(400).send({
				message: `${msgName} не существует`,
				code: 400,
			})
		}

		await Document.update({ type: 'Без типа' }, { where: { type: id } })

		await DocumentType.destroy({
			where: { id },
		})

		res.status(200).send(id)
	} catch (error) {
		console.log(error)
	}
})

export default router
