import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Add from './add'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageSystemAdd page', () => {
	test('ManageSystemAdd render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Add />
				</BrowserRouter>
			</Provider>,
		)

		const add = screen.getByTestId('ManageSystemAdd')
		expect(add).toBeInTheDocument()
	})

	test('ManageSystemAdd snapshot', () => {
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
