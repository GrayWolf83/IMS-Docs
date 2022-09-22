import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import TemplateName from './TemplateName'

describe('TemplateName component', () => {
	test('TemplateName render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<TemplateName />
				</BrowserRouter>
			</Provider>,
		)

		const templateName = screen.getByTestId('TemplateName')
		expect(templateName).toBeInTheDocument()
	})

	test('TemplateName snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<TemplateName />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
