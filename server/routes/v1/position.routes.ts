import { IPosition } from './../../types/Position'
import express from 'express'
import Position from '../../models/Position'

const router = express.Router()
const msgName = 'Позиция'

router.get('/', async (req, res) => {
	try {
		const positions: IPosition[] = await Position.findAll()

		res.status(200).send(positions)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { name, index } = req.body

		const isWithThisName: IPosition = await Position.findOne({
			where: { name },
		})

		if (isWithThisName) {
			return res.status(400).send({
				message: `${msgName} ${name} уже существует`,
				code: 400,
			})
		}

		const position: IPosition = await Position.create({
			name,
			index,
		})

		res.status(201).send(position)
	} catch (error) {
		console.log(error)
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id
	const { name, index } = req.body
	try {
		const oldItem: IPosition = await Position.findOne({
			where: { id },
		})

		if (!oldItem) {
			return res.status(400).send({
				message: `${msgName} ${name} не существует`,
				code: 400,
			})
		} else {
			await Position.update({ name, index }, { where: { id } })
		}

		const position: IPosition = await Position.findOne({
			where: { id },
		})

		res.status(200).send(position)
	} catch (error) {
		console.log(error)
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const position: IPosition = await Position.findOne({
			where: { id },
		})

		if (!position) {
			return res.status(400).send({
				message: `${msgName} не существует`,
				code: 400,
			})
		}

		await Position.destroy({
			where: { id },
		})

		res.status(200).send(id)
	} catch (error) {
		console.log(error)
	}
})

export default router
