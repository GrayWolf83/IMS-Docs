import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppMenuItem from './AppMenuItem'
import { GiRead } from 'react-icons/gi'

describe('AppMenuItem component', () => {
	test('AppMenuItem render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<AppMenuItem
						path='/'
						Icon={GiRead}
						name='test'
						fullName='Справочник организации'
					/>
				</BrowserRouter>
			</Provider>,
		)

		const appMenuItem = screen.getByTestId('AppMenuItem')
		expect(appMenuItem).toBeInTheDocument()
	})

	test('AppMenuItem snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<AppMenuItem
							path='/'
							Icon={GiRead}
							name='test'
							fullName='Справочник организации'
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
