import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import SelectField from './SelectField'

describe('SelectField component', () => {
	test('SelectField render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<SelectField
						items={[{ id: '1', name: 'test', index: 1 }]}
						name='test'
						label='test'
					/>
				</BrowserRouter>
			</Provider>,
		)

		const selectField = screen.getByTestId('SelectField')
		expect(selectField).toBeInTheDocument()
	})

	test('SelectField snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SelectField
							items={[{ id: '1', name: 'test', index: 1 }]}
							name='test'
							label='test'
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
