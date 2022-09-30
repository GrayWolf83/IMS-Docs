import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'

describe('Edit page', () => {
	test('Edit render', () => {
		render(
			<BrowserRouter>
				<Edit />
			</BrowserRouter>,
		)

		const edit = screen.getByTestId('Edit')
		expect(edit).toBeInTheDocument()
	})

	test('Edit snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Edit />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
