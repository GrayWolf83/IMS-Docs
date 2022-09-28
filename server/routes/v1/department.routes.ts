import { IDepartment } from './../../types/Department'
import express from 'express'
import Department from '../../models/Department'
import Document from '../../models/Document'
import User from '../../models/User'
import Familiarity from '../../models/Familiarity'

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
		const { name, fullName, index } = req.body

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
			fullName,
			index,
		})

		res.status(201).send(department)
	} catch (error) {
		console.log(error)
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id
	const { name, fullName, index } = req.body
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
			await Department.update(
				{ name, fullName, index },
				{ where: { id } },
			)
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
	console.log('id', id)

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

		const defaultDepartment = await Department.findOne({
			where: { name: 'Без подразделения' },
		})

		await Document.update(
			{ owner: defaultDepartment.id },
			{ where: { owner: id } },
		)
		await User.update(
			{ department: defaultDepartment.id },
			{ where: { department: id } },
		)
		await Familiarity.update(
			{ department: defaultDepartment.id },
			{ where: { department: id } },
		)

		await Department.destroy({
			where: { id },
		})

		res.status(200).send(id)
	} catch (error) {
		console.log(error)
	}
})

export default router
