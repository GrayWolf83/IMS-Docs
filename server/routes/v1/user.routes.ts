import express from 'express'
import { IUser } from '../../types/User'
import User from '../../models/User'

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		const users: IUser[] = await User.findAll()

		res.status(200).send(users)
	} catch (error) {
		console.log(error)
	}
})

export default router
