import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import HomeMenuItem from './HomeMenuItem'
import { FaListAlt } from 'react-icons/fa'

describe('HomeMenuItem component', () => {
	test('HomeMenuItem render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<HomeMenuItem
						path='/directory'
						name='Справочник'
						Icon={FaListAlt}
					/>
				</BrowserRouter>
			</Provider>,
		)

		const homeMenuItem = screen.getByTestId('HomeMenuItem')
		expect(homeMenuItem).toBeInTheDocument()
	})

	test('HomeMenuItem snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<HomeMenuItem
							path='/directory'
							name='Справочник'
							Icon={FaListAlt}
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
