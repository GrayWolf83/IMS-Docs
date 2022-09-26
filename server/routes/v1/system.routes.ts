import express from 'express'
import { ISystem } from '../../types/System'
import System from '../../models/System'

const router = express.Router()
const msgName = 'Система'

router.get('/', async (req, res) => {
	try {
		const systems: ISystem[] = await System.findAll()

		res.status(200).send(systems)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { name, fullName } = req.body

		const isWithThisName: ISystem = await System.findOne({
			where: { name },
		})

		if (isWithThisName) {
			return res.status(400).send({
				message: `${msgName} ${name} уже существует`,
				code: 400,
			})
		}

		const system: ISystem = await System.create({
			name,
			fullName,
		})

		res.status(201).send(system)
	} catch (error) {
		console.log(error)
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id
	const { name, fullName } = req.body
	try {
		const oldItem: ISystem = await System.findOne({
			where: { id },
		})

		if (!oldItem) {
			return res.status(400).send({
				message: `${msgName} ${name} не существует`,
				code: 400,
			})
		} else {
			await System.update({ name, fullName }, { where: { id } })
		}

		const system: ISystem = await System.findOne({
			where: { id },
		})

		res.status(200).send(system)
	} catch (error) {
		console.log(error)
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const system: ISystem = await System.findOne({
			where: { id },
		})

		if (!system) {
			return res.status(400).send({
				message: `${msgName} не существует`,
				code: 400,
			})
		}

		await System.destroy({
			where: { id },
		})

		res.status(200).send(id)
	} catch (error) {
		console.log(error)
	}
})

export default router
