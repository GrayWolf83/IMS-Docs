import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageDocumentTypeHome page', () => {
	test('ManageDocumentTypeHome render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</Provider>,
		)

		const home = screen.getByTestId('ManageDocumentTypeHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageDocumentTypeHome snapshot', () => {
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
