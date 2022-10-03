import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageDepartmentEdit page', () => {
	test('ManageDepartmentEdit render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Edit />
				</BrowserRouter>
			</Provider>,
		)

		const edit = screen.getByTestId('ManageDepartmentEdit')
		expect(edit).toBeInTheDocument()
	})

	test('ManageDepartmentEdit snapshot', () => {
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
