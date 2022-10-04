import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDocumentType, INewDocumentType } from '../types/documentType'
import documentTypeService from '../services/documentType.service'

type state = {
	entities: IDocumentType[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const documentTypeSlice = createSlice({
	name: 'documentTypes',
	initialState,
	reducers: {
		loaded(state, action: PayloadAction<IDocumentType[]>) {
			state.entities = action.payload
		},
		added(state, action: PayloadAction<IDocumentType>) {
			state.entities = [action.payload, ...state.entities]
		},
		edited(state, action: PayloadAction<IDocumentType>) {
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
	documentTypeSlice.actions

export const loadDocumentTypesList = () => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())

	try {
		const payload: IDocumentType[] = await documentTypeService.getList()
		dispatch(loaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const addDocumentType =
	(data: INewDocumentType) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDocumentType = await documentTypeService.add(data)

			dispatch(added(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const editDocumentType =
	(data: IDocumentType) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDocumentType = await documentTypeService.edit(data)

			dispatch(edited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const deleteDocumentType =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: string = await documentTypeService.delete(data)

			dispatch(deleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const getDocumentTypesList = () => (state: RootState) => {
	return state.documentTypes.entities
}

export const getDocumentTypeById = (id: string) => (state: RootState) => {
	return state.documentTypes.entities.find((item) => item.id === id)
}

export default documentTypeSlice.reducer
