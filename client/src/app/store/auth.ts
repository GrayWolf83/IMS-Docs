import { setLoadingError } from './error'
import { IUser } from './../../../../server/types/User'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

type authState = {
	currentUser: IUser | null
	isLoading: boolean
}

const initialState: authState = {
	currentUser: null,
	isLoading: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLoginSuccess(state, action: PayloadAction<IUser>) {
			state.currentUser = action.payload
		},
		authLogout(state) {
			state.currentUser = null
		},
		authLoadingStart(state) {
			state.isLoading = true
		},
		authLoadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { authLoginSuccess, authLoadingStart, authLoadingEnd, authLogout } =
	authSlice.actions

export const login = (data: FormData) => async (dispatch: AppDispatch) => {
	dispatch(authLoadingStart())

	try {
		const payload = await authService.login(data)
		dispatch(authLoginSuccess(payload.user))

		localStorageService.setTokens({
			...payload,
		})
	} catch (error) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(authLoadingEnd())
	}
}

export const autologin = () => async (dispatch: AppDispatch) => {
	dispatch(authLoadingStart())
	try {
		const payload = await authService.refresh()

		if (!payload?.refreshToken || !payload?.accessToken) {
			localStorageService.removeAuthData()
		} else {
			dispatch(authLoginSuccess(payload.user))

			localStorageService.setTokens({
				...payload,
			})
		}
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(authLoadingEnd())
	}
}

export const logout = () => async (dispatch: AppDispatch) => {
	localStorageService.removeAuthData()
	dispatch(authLogout())
}

export const getCurrentUser = () => (state: RootState) => {
	return state.auth.currentUser
}

export const getAuthLoadingStatus = () => (state: RootState) => {
	return state.auth.isLoading
}

export const getCurrentUserIsManage = () => (state: RootState) => {
	return Boolean(state.auth.currentUser?.role === 'Manage')
}

export default authSlice.reducer
