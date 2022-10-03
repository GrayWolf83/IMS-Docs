import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('Edit page', () => {
	test('Edit render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Edit />
				</BrowserRouter>
			</Provider>,
		)

		const edit = screen.getByTestId('Edit')
		expect(edit).toBeInTheDocument()
	})

	test('Edit snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<Edit />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
