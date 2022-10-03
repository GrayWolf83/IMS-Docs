import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageDepartmentHome page', () => {
	test('ManageDepartmentHome render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</Provider>,
		)

		const home = screen.getByTestId('ManageDepartmentHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageDepartmentHome snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Home />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
