import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('MangeSystemEdit page', () => {
	test('MangeSystemEdit render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Edit />
				</BrowserRouter>
			</Provider>,
		)

		const edit = screen.getByTestId('MangeSystemEdit')
		expect(edit).toBeInTheDocument()
	})

	test('MangeSystemEdit snapshot', () => {
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
