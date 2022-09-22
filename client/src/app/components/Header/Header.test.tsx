import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import Header from './Header'

describe('Header component', () => {
	test('Header render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>,
		)

		const header = screen.getByTestId('Header')
		expect(header).toBeInTheDocument()
	})

	test('Header snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Header />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
