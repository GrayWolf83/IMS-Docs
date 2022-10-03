import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('ManageDocumentTypeEdit page', () => {
	test('ManageDocumentTypeEdit render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Edit />
				</BrowserRouter>
			</Provider>,
		)

		const edit = screen.getByTestId('ManageDocumentTypeEdit')
		expect(edit).toBeInTheDocument()
	})

	test('ManageDocumentTypeEdit snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Edit />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
