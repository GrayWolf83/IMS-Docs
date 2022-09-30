import { IUser, INewUser } from '../types/user'
import httpService from './http.service'

const endpoint = 'user/'

const userService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	add: async (payload: INewUser) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: IUser) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default userService
