import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import FormComponent from './FormComponent'
import TextField from '../TextField'

describe('FormComponent component', () => {
	test('FormComponent render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<FormComponent
						btnLabel='Form'
						onSubmit={() => {}}
						validationShema={{}}>
						<TextField
							name='data'
							value=''
							onChange={() => {}}
							error={null}
							placeholder='test'
							label='data'
						/>
					</FormComponent>
				</BrowserRouter>
			</Provider>,
		)

		const formComponent = screen.getByTestId('FormComponent')
		expect(formComponent).toBeInTheDocument()
	})

	test('FormComponent snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<FormComponent
							btnLabel='Form'
							onSubmit={() => {}}
							validationShema={{}}>
							<TextField
								name='data'
								value=''
								onChange={() => {}}
								error={null}
								placeholder='test'
								label='data'
							/>
						</FormComponent>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
