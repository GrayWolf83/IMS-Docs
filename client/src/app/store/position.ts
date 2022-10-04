import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INewPosition, IPosition } from '../types/position'
import positionService from '../services/position.service'

type state = {
	entities: IPosition[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const positionSlice = createSlice({
	name: 'positions',
	initialState,
	reducers: {
		loaded(state, action: PayloadAction<IPosition[]>) {
			state.entities = action.payload
		},
		added(state, action: PayloadAction<IPosition>) {
			state.entities = [action.payload, ...state.entities]
		},
		edited(state, action: PayloadAction<IPosition>) {
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
	positionSlice.actions

export const loadPositionsList = () => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())

	try {
		const payload: IPosition[] = await positionService.getList()
		dispatch(loaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const addPosition =
	(data: INewPosition) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IPosition = await positionService.add(data)

			dispatch(added(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const editPosition =
	(data: IPosition) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IPosition = await positionService.edit(data)

			dispatch(edited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const deletePosition =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: string = await positionService.delete(data)

			dispatch(deleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const getPositionsList = () => (state: RootState) => {
	return state.positions.entities
		.filter((item) => item.index)
		.sort((a, b) => (a.index > b.index ? 1 : -1))
}

export const getPositionById = (id: string) => (state: RootState) => {
	return state.positions.entities.find((item) => item.id === id)
}

export default positionSlice.reducer
