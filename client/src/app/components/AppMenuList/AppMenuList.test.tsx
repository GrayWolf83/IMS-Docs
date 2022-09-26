import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppMenuList from './AppMenuList'

describe('AppMenuList component', () => {
	test('AppMenuList render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<AppMenuList>
						<p>Test</p>
					</AppMenuList>
				</BrowserRouter>
			</Provider>,
		)

		const appMenuList = screen.getByTestId('AppMenuList')
		expect(appMenuList).toBeInTheDocument()
	})

	test('AppMenuList snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<AppMenuList>
							<p>Test</p>
						</AppMenuList>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
