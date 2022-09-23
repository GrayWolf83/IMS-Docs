import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Book from './book'

describe('Book page', () => {
	test('Book render', () => {
		render(
			<BrowserRouter>
				<Book />
			</BrowserRouter>,
		)

		const book = screen.getByTestId('Book')
		expect(book).toBeInTheDocument()
	})

	test('Book snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Book />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
