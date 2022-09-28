import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import SystemForm from './SystemForm'

describe('SystemForm component', () => {
	test('SystemForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SystemForm onSubmit={() => {}} />
				</BrowserRouter>
			</Provider>,
		)

		const systemForm = screen.getByTestId('SystemForm')
		expect(systemForm).toBeInTheDocument()
	})

	test('SystemForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SystemForm onSubmit={() => {}} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
