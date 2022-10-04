import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageDocumentHome page', () => {
	test('ManageDocumentHome render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</Provider>,
		)

		const home = screen.getByTestId('ManageDocumentHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageDocumentHome snapshot', () => {
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
