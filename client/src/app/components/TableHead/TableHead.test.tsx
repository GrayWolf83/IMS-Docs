import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import TableHead from './TableHead'

describe('TableHead component', () => {
	test('TableHead render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<TableHead titles={['1', '2']}>
						<tbody></tbody>
					</TableHead>
				</BrowserRouter>
			</Provider>,
		)

		const tableHead = screen.getByTestId('TableHead')
		expect(tableHead).toBeInTheDocument()
	})

	test('TableHead snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<TableHead titles={['1', '2']}>
							<tbody></tbody>
						</TableHead>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
