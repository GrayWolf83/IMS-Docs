import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Add from './add'

describe('ManagePositionAdd page', () => {
	test('ManagePositionAdd render', () => {
		render(
			<BrowserRouter>
				<Add />
			</BrowserRouter>,
		)

		const add = screen.getByTestId('ManagePositionAdd')
		expect(add).toBeInTheDocument()
	})

	test('ManagePositionAdd snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Add />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
