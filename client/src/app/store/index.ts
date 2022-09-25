import { configureStore, combineReducers } from '@reduxjs/toolkit'
import errorReducer from './error'
import authReducer from './auth'

const store = configureStore({
	reducer: combineReducers({
		errors: errorReducer,
		auth: authReducer,
	}),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
