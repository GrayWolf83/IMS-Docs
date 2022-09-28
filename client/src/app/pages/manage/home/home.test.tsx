import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'

describe('ManageHome page', () => {
	test('ManageHome render', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		)

		const home = screen.getByTestId('ManageHome')
		expect(home).toBeInTheDocument()
	})

	test('ManageHome snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Home />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
