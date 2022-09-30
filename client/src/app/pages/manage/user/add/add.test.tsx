import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Add from './add'

describe('Add page', () => {
	test('Add render', () => {
		render(
			<BrowserRouter>
				<Add />
			</BrowserRouter>,
		)

		const add = screen.getByTestId('Add')
		expect(add).toBeInTheDocument()
	})

	test('Add snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Add />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
