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
		loginSuccess(state, action: PayloadAction<IUser>) {
			state.currentUser = action.payload
		},
		Logout(state) {
			state.currentUser = null
		},
		loadingStart(state) {
			state.isLoading = true
		},
		loadingEnd(state) {
			state.isLoading = false
		},
	},
})

const { loginSuccess, loadingStart, loadingEnd, Logout } = authSlice.actions

export const login =
	(data: { email: string; password: string }) =>
	async (dispatch: AppDispatch) => {
		dispatch(loadingStart())

		try {
			const payload = await authService.login(data)
			dispatch(loginSuccess(payload.user))

			localStorageService.setTokens({
				...payload,
			})
		} catch (error) {
			dispatch(setLoadingError(error))
		} finally {
			dispatch(loadingEnd())
		}
	}

export const autologin = () => async (dispatch: AppDispatch) => {
	dispatch(loadingStart())
	try {
		const payload = await authService.refresh()

		if (!payload?.refreshToken || !payload?.accessToken) {
			localStorageService.removeAuthData()
		} else {
			dispatch(loginSuccess(payload.user))

			localStorageService.setTokens({
				...payload,
			})
		}
	} catch (error: any) {
		dispatch(setLoadingError(error))
	} finally {
		dispatch(loadingEnd())
	}
}

export const logout = () => async (dispatch: AppDispatch) => {
	localStorageService.removeAuthData()
	dispatch(Logout())
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
