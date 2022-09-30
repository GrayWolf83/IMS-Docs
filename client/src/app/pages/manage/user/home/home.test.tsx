import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('SystemHome page', () => {
	test('SystemHome render', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Home />
				</Provider>
			</BrowserRouter>,
		)

		const home = screen.getByTestId('SystemHome')
		expect(home).toBeInTheDocument()
	})

	test('SystemHome snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Home />
					</Provider>
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
