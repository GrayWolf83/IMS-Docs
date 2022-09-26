import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ManageHome from './manageHome'

describe('ManageHome page', () => {
	test('ManageHome render', () => {
		render(
			<BrowserRouter>
				<ManageHome />
			</BrowserRouter>,
		)

		const manageHome = screen.getByTestId('ManageHome')
		expect(manageHome).toBeInTheDocument()
	})

	test('ManageHome snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<ManageHome />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
