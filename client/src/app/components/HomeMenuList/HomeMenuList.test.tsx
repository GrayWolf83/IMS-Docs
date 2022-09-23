import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import HomeMenuList from './HomeMenuList'

describe('HomeMenuList component', () => {
	test('HomeMenuList render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<HomeMenuList />
				</BrowserRouter>
			</Provider>,
		)

		const homeMenuList = screen.getByTestId('HomeMenuList')
		expect(homeMenuList).toBeInTheDocument()
	})

	test('HomeMenuList snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<HomeMenuList />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
