import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageUserHome page', () => {
	test('ManageUserHome render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</Provider>,
		)

		const home = screen.getByTestId('ManageUserHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageUserHome snapshot', () => {
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
