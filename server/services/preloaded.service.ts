import { IDepartment } from './../types/Department'
import Department from '../models/Department'
import { IPosition } from './../types/Position'
import Position from '../models/Position'

async function Preloaded() {
	try {
		const noneDepartment: IDepartment = await Department.findOne({
			where: { name: 'Без подразделения' },
		})

		const nonePosition: IPosition = await Position.findOne({
			where: { name: 'Должность не указана' },
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
	} catch (error) {}
}

export default Preloaded
