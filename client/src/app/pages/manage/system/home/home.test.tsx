import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('SystemHome page', () => {
	test('SystemHome render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</Provider>,
		)

		const home = screen.getByTestId('SystemHome')
		expect(home).toBeInTheDocument()
	})

	test('SystemHome snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Home />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
