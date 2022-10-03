import { IDocumentType, INewDocumentType } from '../types/documentType'
import httpService from './http.service'

const endpoint = 'documentType/'

const documentTypeService = {
	getList: async () => {
		const { data } = await httpService.get(endpoint)
		return data
	},
	add: async (payload: INewDocumentType) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: IDocumentType) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default documentTypeService
