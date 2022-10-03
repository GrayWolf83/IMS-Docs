import { IDepartment } from './../types/Department'
import Department from '../models/Department'
import { IPosition } from './../types/Position'
import Position from '../models/Position'
import { IUser } from './../types/User'
import User from '../models/User'
import UserAuth from '../models/UserAuth'
import bcrypt from 'bcryptjs'
import mailService from '../services/mail.service'
import { getMailHtml } from '../utils/getMailHtml'
import { generatePassword } from '../utils/generatePassword'

async function Preloaded() {
	try {
		const noneDepartment: IDepartment = await Department.findOne({
			where: { name: 'Без подразделения' },
		})

		const nonePosition: IPosition = await Position.findOne({
			where: { name: 'Должность не указана' },
		})

		const noneUser: IUser = await User.findOne({
			where: { role: 'Manage' },
		})

		if (!noneDepartment) {
			await Department.create({
				name: 'Без подразделения',
				fullName: 'Без подразделения',
				index: 0,
			})
		}

		if (!nonePosition) {
			await Position.create({
				name: 'Должность не указана',
				index: 0,
			})
		}

		if (!noneUser) {
			await User.create({
				name: 'Администратор',
				position: nonePosition.id,
				department: noneDepartment.id,
				phone: '256',
				email: process.env.ADMIN_EMAIL,
				role: 'Manage',
			})

			const newUser: IUser = await User.findOne({
				where: { email: process.env.ADMIN_EMAIL },
			})

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
		}
	} catch (error) {}
}

export default Preloaded
