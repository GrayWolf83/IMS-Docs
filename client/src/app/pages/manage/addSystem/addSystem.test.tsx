import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AddSystem from './addSystem'

describe('AddSystem page', () => {
	test('AddSystem render', () => {
		render(
			<BrowserRouter>
				<AddSystem />
			</BrowserRouter>,
		)

		const addSystem = screen.getByTestId('AddSystem')
		expect(addSystem).toBeInTheDocument()
	})

	test('AddSystem snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<AddSystem />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
