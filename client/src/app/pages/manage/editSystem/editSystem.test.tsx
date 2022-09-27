import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import EditSystem from './editSystem'

describe('EditSystem page', () => {
	test('EditSystem render', () => {
		render(
			<BrowserRouter>
				<EditSystem />
			</BrowserRouter>,
		)

		const editSystem = screen.getByTestId('EditSystem')
		expect(editSystem).toBeInTheDocument()
	})

	test('EditSystem snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<EditSystem />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
