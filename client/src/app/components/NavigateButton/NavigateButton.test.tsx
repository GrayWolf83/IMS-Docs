import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import { FaAddressBook } from 'react-icons/fa'
import NavigateButton from './NavigateButton'

describe('NavigateButton component', () => {
	test('NavigateButton render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<NavigateButton path='/' Icon={FaAddressBook} />
				</BrowserRouter>
			</Provider>,
		)

		const navigateButton = screen.getByTestId('NavigateButton')
		expect(navigateButton).toBeInTheDocument()
	})

	test('NavigateButton snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<NavigateButton path='/' Icon={FaAddressBook} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
