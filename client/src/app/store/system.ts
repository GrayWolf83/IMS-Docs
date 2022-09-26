import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISystem } from '../types/system'
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
		systemsLoaded(state, action: PayloadAction<ISystem[]>) {
			state.entities = action.payload
		},
		systemAdded(state, action: PayloadAction<ISystem>) {
			state.entities = [action.payload, ...state.entities]
		},
		systemEdited(state, action: PayloadAction<ISystem>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		systemDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		systemLoadingStart(state) {
			state.isLoading = true
		},
		systemLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	systemsLoaded,
	systemAdded,
	systemEdited,
	systemDeleted,
	systemLoadingStart,
	systemLoadingEnd,
} = systemSlice.actions

export const loadSystemsList = () => async (dispatch: AppDispatch) => {
	dispatch(systemLoadingStart())

	try {
		const payload = await systemService.getList()
		dispatch(systemsLoaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(systemLoadingEnd())
	}
}

export const addSystem = (data: ISystem) => async (dispatch: AppDispatch) => {
	dispatch(systemLoadingStart())
	try {
		const payload: ISystem = await systemService.add(data)

		dispatch(systemAdded(payload))
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(systemLoadingEnd())
	}
}

export const editSystem = (data: ISystem) => async (dispatch: AppDispatch) => {
	dispatch(systemLoadingStart())
	try {
		const payload: ISystem = await systemService.edit(data)

		dispatch(systemEdited(payload))
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(systemLoadingEnd())
	}
}

export const deleteSystem = (data: string) => async (dispatch: AppDispatch) => {
	dispatch(systemLoadingStart())
	try {
		const payload: string = await systemService.delete(data)

		dispatch(systemDeleted(payload))
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(systemLoadingEnd())
	}
}

export const getSystemsList = () => (state: RootState) => {
	return state.systems.entities
}

export default systemSlice.reducer
