import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './error'
import authReducer from './auth'
import systemReducer from './system'

const store = configureStore({
	reducer: {
		errors: errorReducer,
		auth: authReducer,
		systems: systemReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
