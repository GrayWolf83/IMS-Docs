import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import GoBackButton from './GoBackButton'

describe('GoBackButton component', () => {
	test('GoBackButton render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<GoBackButton />
				</BrowserRouter>
			</Provider>,
		)

		const goBackButton = screen.getByTestId('GoBackButton')
		expect(goBackButton).toBeInTheDocument()
	})

	test('GoBackButton snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<GoBackButton />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
