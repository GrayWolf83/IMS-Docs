import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDocument, INewDocument } from '../types/document'
import documentService from '../services/document.service'

type state = {
	entities: IDocument[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const documentSlice = createSlice({
	name: 'documents',
	initialState,
	reducers: {
		loaded(state, action: PayloadAction<IDocument[]>) {
			state.entities = action.payload
		},
		added(state, action: PayloadAction<IDocument>) {
			state.entities = [action.payload, ...state.entities]
		},
		edited(state, action: PayloadAction<IDocument>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		deleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		loadingStart(state) {
			state.isLoading = true
		},
		loadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { loaded, added, edited, deleted, loadingStart, loadingEnd } =
	documentSlice.actions

export const loadDocumentsList =
	(systemId: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())

		try {
			const payload: IDocument[] = await documentService.getList(systemId)
			dispatch(loaded(payload))
		} catch (error) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const addDocument =
	(data: INewDocument) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDocument = await documentService.add(data)

			dispatch(added(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const editDocument =
	(data: IDocument) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDocument = await documentService.edit(data)

			dispatch(edited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const deleteDocument =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: string = await documentService.delete(data)

			dispatch(deleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const getDocumentsList = () => (state: RootState) => {
	return state.documents.entities
}

export const getDocumentById = (id: string) => (state: RootState) => {
	return state.documents.entities.find((item) => item.id === id)
}

export default documentSlice.reducer
