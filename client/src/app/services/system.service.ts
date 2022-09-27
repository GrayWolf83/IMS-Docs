import { ISystem } from '../types/system'
import httpService from './http.service'

const endpoint = 'system/'

const systemService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	add: async (payload: { name: string; fullName: string }) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: ISystem) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default systemService
