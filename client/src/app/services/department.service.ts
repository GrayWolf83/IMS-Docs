import { IDepartment, INewDepartment } from '../types/department'
import httpService from './http.service'

const endpoint = 'department/'

const departmentService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	add: async (payload: INewDepartment) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: IDepartment) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default departmentService
