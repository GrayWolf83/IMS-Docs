import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config()

class MailService {
	transporter: any

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			secure: process.env.MAIL_SECURE,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		})
	}

	async sendMail(email, html, subject) {
		try {
			await this.transporter.sendMail({
				html,
				from: `eISM ${process.env.MAIL_USER}`,
				to: email,
				subject,
			})
		} catch (err) {
			console.error(err)
		}
	}
}

export default new MailService()
