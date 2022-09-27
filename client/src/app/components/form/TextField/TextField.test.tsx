import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import TextField from './TextField'

describe('TextField component', () => {
	test('TextField render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<TextField name='test' label='Test' placeholder='test' />
				</BrowserRouter>
			</Provider>,
		)

		const textField = screen.getByTestId('TextField')
		expect(textField).toBeInTheDocument()
	})

	test('TextField snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<TextField
							name='test'
							label='Test'
							placeholder='test'
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
