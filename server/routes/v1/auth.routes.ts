import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../../models/User'
import { IUser } from '../../types/User'
import tokenService from '../../services/token.service'
import UserAuth from '../../models/UserAuth'

const router = express.Router()

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body

		const user: IUser = await User.findOne({ where: { email } })

		if (!user) {
			return res
				.status(400)
				.json({ message: 'Ошибка авторизации', code: 400 })
		}

		const userAuth = await UserAuth.findOne({ where: { user: user.id } })

		const isValidPassword = await bcrypt.compare(
			password,
			userAuth.password,
		)
		if (!isValidPassword) {
			return res
				.status(400)
				.json({ message: 'Ошибка авторизации', code: 400 })
		}

		const tokens = tokenService.generate({ id: user.id })
		await tokenService.save(user.id, tokens.refreshToken)

		res.status(200).send({
			...tokens,
			user,
		})
	} catch (error) {
		res.status(500).json({
			message: 'На сервере произошла ошибка!',
			code: 500,
		})
	}
})

function isTokenInvalid(data, dbToken) {
	return !data || !dbToken || data.id.toString() !== dbToken?.user.toString()
}

router.post('/token', async (req, res) => {
	try {
		const { refreshToken } = req.body

		const data = tokenService.validateRefresh(refreshToken)
		const dbToken = await tokenService.findToken(refreshToken)

		if (isTokenInvalid(data, dbToken)) {
			return res.json({ message: 'Вы не авторизованы', code: 401 })
		}

		const tokens = await tokenService.generate({
			id: dbToken.user.toString(),
		})

		await tokenService.save(data.id, tokens.refreshToken)

		const user = await User.findOne({ where: { id: data.id } })

		res.status(200).send({
			...tokens,
			user,
		})
	} catch (e) {
		res.status(500).json({
			message: 'На сервере произошла ошибка!',
			code: 500,
		})
	}
})

export default router
