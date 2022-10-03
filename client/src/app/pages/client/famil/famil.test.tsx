import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Famil from './famil'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('ClientFamil page', () => {
	test('ClientFamil render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Famil />
				</BrowserRouter>
			</Provider>,
		)

		const famil = screen.getByTestId('ClientFamil')
		expect(famil).toBeInTheDocument()
	})

	test('ClientFamil snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Famil />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
