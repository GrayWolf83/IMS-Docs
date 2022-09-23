import axios from 'axios'
import httpService from './http.service'
import localStorageService from './localStorage.service'
import config from '../../config.json'

const endpoint = 'auth/'

const httpAuth = axios.create({
	baseURL: config.API_ENDPOINT,
})

const authService = {
	login: async ({ email, password }: { email: string; password: string }) => {
		const { data } = await httpService.post(endpoint + 'login', {
			email,
			password,
		})

		return data
	},

	register: async ({
		email,
		password,
		name,
	}: {
		email: string
		password: string
		name: string
	}) => {
		const { data } = await httpService.post(endpoint + 'signUp', {
			email,
			password,
			name,
		})

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
