import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Add from './add'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageUserAdd page', () => {
	test('ManageUserAdd render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Add />
				</BrowserRouter>
			</Provider>,
		)

		const add = screen.getByTestId('ManageUserAdd')
		expect(add).toBeInTheDocument()
	})

	test('ManageUserAdd snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Add />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
