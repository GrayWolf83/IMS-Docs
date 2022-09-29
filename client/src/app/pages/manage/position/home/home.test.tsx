import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManagePositionHome page', () => {
	test('ManagePositionHome render', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Home />
				</Provider>
			</BrowserRouter>,
		)

		const home = screen.getByTestId('ManagePositionHome')
		expect(home).toBeInTheDocument()
	})

	test('ManagePositionHome snapshot', () => {
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
