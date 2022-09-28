import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './error'
import authReducer from './auth'
import systemReducer from './system'
import departmentReducer from './department'

const store = configureStore({
	reducer: {
		errors: errorReducer,
		auth: authReducer,
		systems: systemReducer,
		departments: departmentReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
