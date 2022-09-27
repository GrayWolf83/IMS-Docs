import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import DeleteDialog from './DeleteDialog'

describe('DeleteDialog component', () => {
	test('DeleteDialog render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<DeleteDialog
						name='Test'
						onDelete={() => {}}
						onClose={() => {}}
						isOpen={false}
					/>
				</BrowserRouter>
			</Provider>,
		)

		const deleteDialog = screen.getByTestId('DeleteDialog')
		expect(deleteDialog).toBeInTheDocument()
	})

	test('DeleteDialog snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<DeleteDialog
							onDelete={() => {}}
							onClose={() => {}}
							name='Test'
							isOpen={false}
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
