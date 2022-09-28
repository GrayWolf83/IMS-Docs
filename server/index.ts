import express from 'express'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import DB from './utils/database'
import * as dotenv from 'dotenv'
import routerV1 from './routes/v1'
import Preloaded from './services/preloaded.service'

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/v1', routerV1)

const port = process.env.PORT
async function start() {
	try {
		await DB.sync()
		await Preloaded()
		app.listen(port, () => {
			console.log(`Сервер запущен, порт ${port}`)
		})
	} catch (error) {
		console.error(error)
	}
}

start()
