import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Famil from './famil'

describe('Famil page', () => {
	test('Famil render', () => {
		render(
			<BrowserRouter>
				<Famil />
			</BrowserRouter>,
		)

		const famil = screen.getByTestId('Famil')
		expect(famil).toBeInTheDocument()
	})

	test('Famil snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Famil />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
