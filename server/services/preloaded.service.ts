import { IDepartment } from './../types/Department'
import Department from '../models/Department'

async function Preloaded() {
	try {
		const noneDepartment: IDepartment = await Department.findOne({
			where: { name: 'Без подразделения' },
		})

		if (!noneDepartment) {
			await Department.create({
				name: 'Без подразделения',
				fullName: 'Без подразделения',
				index: 0,
			})
		}
	} catch (error) {}
}

export default Preloaded
