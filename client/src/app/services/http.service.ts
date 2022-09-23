import axios from 'axios'
import localStorageService from './localStorage.service'
import authService from './auth.service'
import config from '../../config.json'

const http = axios.create({
	baseURL: config.API_ENDPOINT,
})

http.interceptors.request.use(
	async function (config) {
		const expiresDate = localStorageService.getTokenExpiresDate()
		const refreshToken = localStorageService.getRefreshToken()
		if (expiresDate) {
			if (refreshToken && Number(expiresDate) < Date.now()) {
				const data = await authService.refresh()
				if (!data?.refreshToken || !data?.accessToken) {
					localStorageService.removeAuthData()
				} else {
					localStorageService.setTokens({
						refreshToken: data.refreshToken,
						accessToken: data.accessToken,
						expiresIn: data.expiresIn,
					})
				}
			}
		}
		const accessToken = localStorageService.getAccessToken()
		if (accessToken) {
			config.headers = {
				...config.headers,
				Authorization: 'Bearer ' + accessToken,
			}
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

const httpService = {
	get: http.get,
	post: http.post,
	delete: http.delete,
	patch: http.patch,
}

export default httpService
