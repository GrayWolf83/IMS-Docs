import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import PositionForm from './PositionForm'

describe('PositionForm component', () => {
	test('PositionForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<PositionForm onSubmit={() => {}} />
				</BrowserRouter>
			</Provider>,
		)

		const positionForm = screen.getByTestId('PositionForm')
		expect(positionForm).toBeInTheDocument()
	})

	test('PositionForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<PositionForm onSubmit={() => {}} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
