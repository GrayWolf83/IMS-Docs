import express from 'express'
import Document from '../../models/Document'
import { IDocument } from '../../types/Document'
import Familiarity from '../../models/Familiarity'

const router = express.Router()
const msgName = 'Документ'

router.get('/:systemId', async (req, res) => {
	const systemId = req.params.systemId
	try {
		const documents: IDocument[] = await Document.findAll({
			where: { system: systemId },
		})

		res.status(200).send(documents)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { index, number, name, owner, system, type, familiarity } =
			req.body

		const isWithThisNumber: IDocument = await Document.findOne({
			where: { number },
		})

		if (isWithThisNumber) {
			return res.status(400).send({
				message: `${msgName} ${number} уже существует`,
				code: 400,
			})
		}

		const document: IDocument = await Document.create({
			index,
			number,
			name,
			owner,
			system,
			type,
		})

		const famils = familiarity.map((item) => ({
			department: item,
			document: document.id,
		}))

		await Familiarity.bulkCreate(famils)

		res.status(201).send(document)
	} catch (error) {
		console.log(error)
	}
})

// router.patch('/:id', async (req, res) => {
// 	const id = req.params.id
// 	const { index, description } = req.body
// 	try {
// 		const oldItem: IDocumentType = await DocumentType.findOne({
// 			where: { id },
// 		})

// 		if (!oldItem) {
// 			return res.status(400).send({
// 				message: `${msgName} ${index} не существует`,
// 				code: 400,
// 			})
// 		} else {
// 			await DocumentType.update({ index, description }, { where: { id } })
// 		}

// 		const dt: IDocumentType = await DocumentType.findOne({
// 			where: { id },
// 		})

// 		res.status(200).send(dt)
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

// router.delete('/:id', async (req, res) => {
// 	const id = req.params.id

// 	try {
// 		const dt: IDocumentType = await DocumentType.findOne({
// 			where: { id },
// 		})

// 		if (!dt) {
// 			return res.status(400).send({
// 				message: `${msgName} не существует`,
// 				code: 400,
// 			})
// 		}

// 		await Document.update({ type: 'Без типа' }, { where: { type: id } })

// 		await DocumentType.destroy({
// 			where: { id },
// 		})

// 		res.status(200).send(id)
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

export default router
