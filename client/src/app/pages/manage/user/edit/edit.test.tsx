import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageUserEdit page', () => {
	test('ManageUserEdit render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Edit />
				</BrowserRouter>
			</Provider>,
		)

		const edit = screen.getByTestId('ManageUserEdit')
		expect(edit).toBeInTheDocument()
	})

	test('ManageUserEdit snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Edit />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
