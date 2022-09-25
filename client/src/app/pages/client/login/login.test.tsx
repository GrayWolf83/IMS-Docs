import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './login'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('Login page', () => {
	test('Login render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>,
		)

		const login = screen.getByTestId('Login')
		expect(login).toBeInTheDocument()
	})

	test('Login snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Login />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
