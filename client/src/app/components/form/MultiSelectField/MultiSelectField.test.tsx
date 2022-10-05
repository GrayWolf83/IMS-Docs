import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import MultiSelectField from './MultiSelectField'

describe('MultiMultiSelectField component', () => {
	test('MultiSelectField render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<MultiSelectField
						items={[{ id: '1', name: 'test' }]}
						name='test'
						label='test'
					/>
				</BrowserRouter>
			</Provider>,
		)

		const select = screen.getByTestId('MultiSelectField')
		expect(select).toBeInTheDocument()
	})

	test('MultiSelectField snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<MultiSelectField
							items={[{ id: '1', name: 'test' }]}
							name='test'
							label='test'
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
