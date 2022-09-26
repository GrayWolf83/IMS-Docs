import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import ErrorToast from './ErrorToast'

describe('ErrorToast component', () => {
	test('ErrorToast render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ErrorToast />
				</BrowserRouter>
			</Provider>,
		)

		const errorToast = screen.getByTestId('ErrorToast')
		expect(errorToast).toBeInTheDocument()
	})

	test('ErrorToast snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<ErrorToast />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
