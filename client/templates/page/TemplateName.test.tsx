import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TemplateName from './templateName'

describe('TemplateName page', () => {
	test('TemplateName render', () => {
		render(
			<BrowserRouter>
				<TemplateName />
			</BrowserRouter>,
		)

		const templateName = screen.getByTestId('TemplateName')
		expect(templateName).toBeInTheDocument()
	})

	test('TemplateName snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<TemplateName />
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
