import { IDocument, INewDocument } from '../types/document'
import httpService from './http.service'

const endpoint = 'document/'

const documentService = {
	getList: async (systemId: string) => {
		const { data } = await httpService.get(endpoint + systemId)
		return data
	},
	add: async (payload: INewDocument) => {
		const { data } = await httpService.post(endpoint, payload)

		return data
	},
	edit: async (payload: IDocument) => {
		const { data } = await httpService.patch(endpoint + payload.id, payload)

		return data
	},
	delete: async (payload: string) => {
		const { data } = await httpService.delete(endpoint + payload)

		return data
	},
}

export default documentService
