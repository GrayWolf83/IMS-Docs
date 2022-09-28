import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Add from './add'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageSystemAdd page', () => {
	test('ManageSystemAdd render', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Add />
				</Provider>
			</BrowserRouter>,
		)

		const add = screen.getByTestId('ManageSystemAdd')
		expect(add).toBeInTheDocument()
	})

	test('ManageSystemAdd snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Add />
					</Provider>
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
