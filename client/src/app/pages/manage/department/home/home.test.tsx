import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'

describe('ManageDepartmentHome page', () => {
	test('ManageDepartmentHome render', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		)

		const home = screen.getByTestId('ManageDepartmentHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageDepartmentHome snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
