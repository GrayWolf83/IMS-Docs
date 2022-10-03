import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Book from './book'
import { Provider } from 'react-redux'
import store from '../../../store'

describe('Book page', () => {
	test('Book render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Book />
				</BrowserRouter>
			</Provider>,
		)

		const book = screen.getByTestId('Book')
		expect(book).toBeInTheDocument()
	})

	test('Book snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Book />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
