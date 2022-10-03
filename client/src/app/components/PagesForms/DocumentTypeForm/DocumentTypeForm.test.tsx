import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import DocumentTypeForm from './DocumentTypeForm'

describe('DocumentTypeForm component', () => {
	test('DocumentTypeForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<DocumentTypeForm onSubmit={() => {}} />
				</BrowserRouter>
			</Provider>,
		)

		const documentTypeForm = screen.getByTestId('DocumentTypeForm')
		expect(documentTypeForm).toBeInTheDocument()
	})

	test('DocumentTypeForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<DocumentTypeForm onSubmit={() => {}} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
