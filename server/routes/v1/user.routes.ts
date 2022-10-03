import express from 'express'
import { IUser } from '../../types/User'
import User from '../../models/User'
import UserAuth from '../../models/UserAuth'
import bcrypt from 'bcryptjs'
import mailService from '../../services/mail.service'
import { getMailHtml } from '../../utils/getMailHtml'
import Token from '../../models/Token'
import TestResult from '../../models/TestResult'
import { generatePassword } from '../../utils/generatePassword'

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		const users: IUser[] = await User.findAll()

		res.status(200).send(users)
	} catch (error) {
		console.log(error)
	}
})

router.post('/', async (req, res) => {
	try {
		const { name, position, department, phone, email } = req.body

		const existingUser: IUser = await User.findOne({ where: { email } })
		if (existingUser) {
			return res.status(400).json({
				message: 'Данный email уже зарегистрирован',
				code: 400,
			})
		}

		await User.create({
			name,
			position,
			department,
			email,
			phone,
			role: 'User',
		})

		const newUser: IUser = await User.findOne({ where: { email } })

		const password = generatePassword()

		const hashedPass = await bcrypt.hash(password, 12)

		await UserAuth.create({
			user: newUser.id,
			password: hashedPass,
		})

		await mailService.sendMail(
			newUser.email,
			getMailHtml(newUser.name, password),
			'Регистрация в системе IMS-Docs',
		)

		res.status(201).send({
			user: newUser,
		})
	} catch (e) {
		res.status(500).json({
			message: 'На сервере произошла ошибка!',
			code: 500,
		})
	}
})

router.patch('/:id', async (req, res) => {
	const id = req.params.id

	try {
		const { name, position, department, phone, email, role } = req.body

		const oldUser: IUser = await User.findOne({ where: { id } })
		if (!oldUser) {
			return res.status(400).json({
				message: 'Данный пользователь не зарегистрирован',
				code: 400,
			})
		}

		await User.update(
			{
				name,
				position,
				department,
				email,
				phone,
				role,
			},
			{ where: { id } },
		)

		const user: IUser = await User.findOne({ where: { id } })

		res.status(201).send({
			user,
		})
	} catch (e) {
		res.status(500).json({
			message: 'На сервере произошла ошибка!',
			code: 500,
		})
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id

	try {
		const user: IUser = await User.findOne({ where: { id } })
		if (!user) {
			return res.status(400).json({
				message: 'Данный пользователь не зарегистрирован',
				code: 400,
			})
		}

		await UserAuth.destroy({ where: { user: user.id } })
		await Token.destroy({ where: { user: user.id } })
		await TestResult.destroy({ where: { user: user.id } })
		await User.destroy({ where: { id } })

		res.status(201).send(id)
	} catch (e) {
		res.status(500).json({
			message: 'На сервере произошла ошибка!',
			code: 500,
		})
	}
})

export default router
