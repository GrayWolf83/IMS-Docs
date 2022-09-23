import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import GoHomeButton from './GoHomeButton'

describe('GoHomeButton component', () => {
	test('GoHomeButton render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<GoHomeButton />
				</BrowserRouter>
			</Provider>,
		)

		const goHomeButton = screen.getByTestId('GoHomeButton')
		expect(goHomeButton).toBeInTheDocument()
	})

	test('GoHomeButton snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<GoHomeButton />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
