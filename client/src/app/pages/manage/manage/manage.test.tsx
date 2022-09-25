import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Manage from './manage'

describe('Manage page', () => {
	test('Manage render', () => {
		render(
			<BrowserRouter>
				<Manage />
			</BrowserRouter>,
		)

		const manage = screen.getByTestId('Manage')
		expect(manage).toBeInTheDocument()
	})

	test('Manage snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Manage />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
