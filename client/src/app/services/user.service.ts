import httpService from './http.service'

const endpoint = 'user/'

const userService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
}

export default userService
