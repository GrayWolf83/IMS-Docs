import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import PageTitle from './PageTitle'

describe('PageTitle component', () => {
	test('PageTitle render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<PageTitle title='Test' backPath='/' />
				</BrowserRouter>
			</Provider>,
		)

		const pageTitle = screen.getByTestId('PageTitle')
		expect(pageTitle).toBeInTheDocument()
	})

	test('PageTitle snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<PageTitle title='Test' backPath='/' />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
