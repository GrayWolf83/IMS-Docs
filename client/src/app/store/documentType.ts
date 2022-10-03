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
		documentTypesLoaded(state, action: PayloadAction<IDocumentType[]>) {
			state.entities = action.payload
		},
		documentTypeAdded(state, action: PayloadAction<IDocumentType>) {
			state.entities = [action.payload, ...state.entities]
		},
		documentTypeEdited(state, action: PayloadAction<IDocumentType>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		documentTypeDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		documentTypeLoadingStart(state) {
			state.isLoading = true
		},
		documentTypeLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	documentTypesLoaded,
	documentTypeAdded,
	documentTypeEdited,
	documentTypeDeleted,
	documentTypeLoadingStart,
	documentTypeLoadingEnd,
} = documentTypeSlice.actions

export const loadDocumentTypesList = () => async (dispatch: AppDispatch) => {
	dispatch(documentTypeLoadingStart())

	try {
		const payload: IDocumentType[] = await documentTypeService.getList()
		dispatch(documentTypesLoaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(documentTypeLoadingEnd())
	}
}

export const addDocumentType =
	(data: INewDocumentType) => async (dispatch: AppDispatch) => {
		dispatch(documentTypeLoadingStart())
		try {
			const payload: IDocumentType = await documentTypeService.add(data)

			dispatch(documentTypeAdded(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(documentTypeLoadingEnd())
		}
	}

export const editDocumentType =
	(data: IDocumentType) => async (dispatch: AppDispatch) => {
		dispatch(documentTypeLoadingStart())
		try {
			const payload: IDocumentType = await documentTypeService.edit(data)

			dispatch(documentTypeEdited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(documentTypeLoadingEnd())
		}
	}

export const deleteDocumentType =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(documentTypeLoadingStart())
		try {
			const payload: string = await documentTypeService.delete(data)

			dispatch(documentTypeDeleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(documentTypeLoadingEnd())
		}
	}

export const getDocumentTypesList = () => (state: RootState) => {
	return state.documentTypes.entities
}

export const getDocumentTypeById = (id: string) => (state: RootState) => {
	return state.documentTypes.entities.find((item) => item.id === id)
}

export default documentTypeSlice.reducer
