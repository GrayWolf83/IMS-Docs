import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'

describe('Home page', () => {
	test('Home render', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		)

		const home = screen.getByTestId('Home')
		expect(home).toBeInTheDocument()
	})

	test('Home snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
