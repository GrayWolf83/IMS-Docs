import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDepartment } from '../types/department'
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
		departmentsLoaded(state, action: PayloadAction<IDepartment[]>) {
			state.entities = action.payload
		},
		departmentAdded(state, action: PayloadAction<IDepartment>) {
			state.entities = [action.payload, ...state.entities]
		},
		departmentEdited(state, action: PayloadAction<IDepartment>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		departmentDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		departmentLoadingStart(state) {
			state.isLoading = true
		},
		departmentLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	departmentsLoaded,
	departmentAdded,
	departmentEdited,
	departmentDeleted,
	departmentLoadingStart,
	departmentLoadingEnd,
} = departmentSlice.actions

export const loadDepartmentList = () => async (dispatch: AppDispatch) => {
	dispatch(departmentLoadingStart())

	try {
		const payload = await departmentService.getList()
		dispatch(departmentsLoaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(departmentLoadingEnd())
	}
}

export const addDepartment =
	(data: { name: string; fullName: string; index: number }) =>
	async (dispatch: AppDispatch) => {
		dispatch(departmentLoadingStart())
		try {
			const payload: IDepartment = await departmentService.add(data)

			dispatch(departmentAdded(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(departmentLoadingEnd())
		}
	}

export const editDepartment =
	(data: IDepartment) => async (dispatch: AppDispatch) => {
		dispatch(departmentLoadingStart())
		try {
			const payload: IDepartment = await departmentService.edit(data)

			dispatch(departmentEdited(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(departmentLoadingEnd())
		}
	}

export const deleteDepartment =
	(data: string) => async (dispatch: AppDispatch) => {
		dispatch(departmentLoadingStart())
		try {
			const payload: string = await departmentService.delete(data)

			dispatch(departmentDeleted(payload))
		} catch (error: any) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(departmentLoadingEnd())
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

export default departmentSlice.reducer
