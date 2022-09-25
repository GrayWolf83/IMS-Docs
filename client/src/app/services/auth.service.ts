import { IUser } from './../../../../server/types/User'
import axios from 'axios'
import httpService from './http.service'
import localStorageService from './localStorage.service'
import config from '../../config.json'

const endpoint = 'auth/'

const httpAuth = axios.create({
	baseURL: config.API_ENDPOINT,
})

const authService = {
	login: async (payload: FormData) => {
		const { data } = await httpService.post(endpoint + 'login', payload, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		return data
	},

	register: async (payload: IUser) => {
		const { data } = await httpService.post(endpoint + 'register', payload)
		return data
	},

	refresh: async () => {
		const { data } = await httpAuth.post(endpoint + 'token', {
			refreshToken: localStorageService.getRefreshToken(),
		})

		return data
	},
}

export default authService
