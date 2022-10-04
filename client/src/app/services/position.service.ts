import { INewPosition, IPosition } from '../types/position'
import httpService from './http.service'

const endpoint = 'position/'

const positionService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	add: async (payload: INewPosition) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: IPosition) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default positionService
