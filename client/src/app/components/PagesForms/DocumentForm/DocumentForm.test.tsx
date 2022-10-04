import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import DocumentForm from './DocumentForm'

describe('DocumentForm component', () => {
	test('DocumentForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<DocumentForm onSubmit={() => {}} />
				</BrowserRouter>
			</Provider>,
		)

		const documentForm = screen.getByTestId('DocumentForm')
		expect(documentForm).toBeInTheDocument()
	})

	test('DocumentForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<DocumentForm onSubmit={() => {}} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
