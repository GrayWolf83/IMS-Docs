import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDepartment, INewDepartment } from '../types/department'
import departmentService from '../services/department.service'

type state = {
	entities: IDepartment[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const departmentSlice = createSlice({
	name: 'departments',
	initialState,
	reducers: {
		loaded(state, action: PayloadAction<IDepartment[]>) {
			state.entities = action.payload
		},
		added(state, action: PayloadAction<IDepartment>) {
			state.entities = [action.payload, ...state.entities]
		},
		edited(state, action: PayloadAction<IDepartment>) {
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
	departmentSlice.actions

export const loadDepartmentList = () => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())

	try {
		const payload = await departmentService.getList()
		dispatch(loaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const addDepartment =
	(data: INewDepartment) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDepartment = await departmentService.add(data)

			dispatch(added(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const editDepartment =
	(data: IDepartment) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: IDepartment = await departmentService.edit(data)

			dispatch(edited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const deleteDepartment =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(loadingStart())
		try {
			const payload: string = await departmentService.delete(data)

			dispatch(deleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const getDepartmentsList = () => (state: RootState) => {
	return state.departments.entities
		.filter((item) => item.index)
		.sort((a, b) => (a.index > b.index ? 1 : -1))
}

export const getDepartmentById = (id: string) => (state: RootState) => {
	return state.departments.entities.find((item) => item.id === id)
}

export const getDefaultDepartment = () => (state: RootState) => {
	return state.departments.entities.find((item) => item.index === 0)
}

export default departmentSlice.reducer
