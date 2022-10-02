import { INewUser } from './../types/user'
import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/user'
import userService from '../services/user.service'

type state = {
	entities: IUser[]
	isLoading: boolean
}

const initialState: state = {
	entities: [],
	isLoading: false,
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		usersLoaded(state, action: PayloadAction<IUser[]>) {
			state.entities = action.payload
		},
		userAdded(state, action: PayloadAction<IUser>) {
			state.entities = [action.payload, ...state.entities]
		},
		userEdited(state, action: PayloadAction<IUser>) {
			state.entities = state.entities.map((item) => {
				return item.id === action.payload.id ? action.payload : item
			})
		},
		userDeleted(state, action: PayloadAction<string>) {
			state.entities = state.entities.filter(
				(item) => item.id !== action.payload,
			)
		},
		userLoadingStart(state) {
			state.isLoading = true
		},
		userLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const {
	usersLoaded,
	userAdded,
	userEdited,
	userDeleted,
	userLoadingStart,
	userLoadingEnd,
} = userSlice.actions

export const loadUsersList = () => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload: IUser[] = await userService.getList()
		dispatch(usersLoaded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const addUser = (data: INewUser) => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload: IUser = await userService.add(data)
		dispatch(userAdded(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const editUser = (data: IUser) => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload: IUser = await userService.edit(data)
		dispatch(userEdited(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const deleteUser = (data: string) => async (dispatch: AppDispatch) => {
	dispatch(userLoadingStart())
	try {
		const payload: string = await userService.delete(data)
		dispatch(userDeleted(payload))
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(userLoadingEnd())
	}
}

export const getUsersList = () => (state: RootState) => {
	return state.users.entities
}

export const getUserById = (id: string) => (state: RootState) => {
	return state.users.entities.find((user) => user.id === id)
}

export default userSlice.reducer
