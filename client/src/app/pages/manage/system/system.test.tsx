import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import System from './system'

describe('System page', () => {
	test('System render', () => {
		render(
			<BrowserRouter>
				<System />
			</BrowserRouter>,
		)

		const system = screen.getByTestId('System')
		expect(system).toBeInTheDocument()
	})

	test('System snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<System />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
