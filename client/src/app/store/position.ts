import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPosition } from '../types/position'
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
		positionsLoaded(state, action: PayloadAction<IPosition[]>) {
			state.entities = action.payload
		},
		positionAdded(state, action: PayloadAction<IPosition>) {
			state.entities = [action.payload, ...state.entities]
		},
		positionEdited(state, action: PayloadAction<IPosition>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		positionDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		positionLoadingStart(state) {
			state.isLoading = true
		},
		positionLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	positionsLoaded,
	positionAdded,
	positionEdited,
	positionDeleted,
	positionLoadingStart,
	positionLoadingEnd,
} = positionSlice.actions

export const loadPositionsList = () => async (dispatch: AppDispatch) => {
	dispatch(positionLoadingStart())

	try {
		const payload: IPosition[] = await positionService.getList()
		dispatch(positionsLoaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(positionLoadingEnd())
	}
}

export const addPosition =
	(data: { name: string; index: number }) =>
	async (dispatch: AppDispatch) => {
		dispatch(positionLoadingStart())
		try {
			const payload: IPosition = await positionService.add(data)

			dispatch(positionAdded(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(positionLoadingEnd())
		}
	}

export const editPosition =
	(data: IPosition) => async (dispatch: AppDispatch) => {
		dispatch(positionLoadingStart())
		try {
			const payload: IPosition = await positionService.edit(data)

			dispatch(positionEdited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(positionLoadingEnd())
		}
	}

export const deletePosition =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(positionLoadingStart())
		try {
			const payload: string = await positionService.delete(data)

			dispatch(positionDeleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(positionLoadingEnd())
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
