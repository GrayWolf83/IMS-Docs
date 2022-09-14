import { IDepartment } from './../../types/Department'
import express from 'express'
import Department from '../../models/Department'

const router = express.Router()
const msgName = 'Подразделение'

router.get('/', async (req, res) => {
	try {
		const departments: IDepartment[] = await Department.findAll()

		res.status(200).send(departments)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { name, index } = req.body

		const isWithThisName: IDepartment = await Department.findOne({
			where: { name },
		})

		if (isWithThisName) {
			return res.status(400).send({
				message: `${msgName} ${name} уже существует`,
				code: 400,
			})
		}

		const department: IDepartment = await Department.create({
			name,
			index,
		})

		res.status(201).send(department)
	} catch (error) {
		console.log(error)
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id
	const { name, index } = req.body
	try {
		const oldItem: IDepartment = await Department.findOne({
			where: { id },
		})

		if (!oldItem) {
			return res.status(400).send({
				message: `${msgName} ${name} не существует`,
				code: 400,
			})
		} else {
			await Department.update({ name, index }, { where: { id } })
		}

		const department: IDepartment = await Department.findOne({
			where: { id },
		})

		res.status(200).send(department)
	} catch (error) {
		console.log(error)
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const department: IDepartment = await Department.findOne({
			where: { id },
		})

		if (!department) {
			return res.status(400).send({
				message: `${msgName} не существует`,
				code: 400,
			})
		}

		await Department.destroy({
			where: { id },
		})

		res.status(200).send(id)
	} catch (error) {
		console.log(error)
	}
})

export default router
