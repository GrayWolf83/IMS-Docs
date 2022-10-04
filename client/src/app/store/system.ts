import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INewSystem, ISystem } from '../types/system'
import systemService from '../services/system.service'

type state = {
	entities: ISystem[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const systemSlice = createSlice({
	name: 'systems',
	initialState,
	reducers: {
		loaded(state, action: PayloadAction<ISystem[]>) {
			state.entities = action.payload
		},
		added(state, action: PayloadAction<ISystem>) {
			state.entities = [action.payload, ...state.entities]
		},
		edited(state, action: PayloadAction<ISystem>) {
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
	systemSlice.actions

export const loadSystemsList = () => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())

	try {
		const payload = await systemService.getList()
		dispatch(loaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const addSystem =
	(data: INewSystem) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: ISystem = await systemService.add(data)

			dispatch(added(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const editSystem = (data: ISystem) => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())
	try {
		const payload: ISystem = await systemService.edit(data)

		dispatch(edited(payload))
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const deleteSystem = (data: string) => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())
	try {
		const payload: string = await systemService.delete(data)

		dispatch(deleted(payload))
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const getSystemsList = () => (state: RootState) => {
	return state.systems.entities
}

export const getSystemById = (id: string) => (state: RootState) => {
	return state.systems.entities.find((item) => item.id === id)
}

export default systemSlice.reducer
