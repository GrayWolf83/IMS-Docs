import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Edit from './edit'
import { Provider } from 'react-redux'
import store from '../../../../store'

describe('MangeSystemEdit page', () => {
	test('MangeSystemEdit render', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Edit />
				</Provider>
			</BrowserRouter>,
		)

		const edit = screen.getByTestId('MangeSystemEdit')
		expect(edit).toBeInTheDocument()
	})

	test('MangeSystemEdit snapshot', () => {
		expect(
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Edit />
					</Provider>
				</BrowserRouter>,
			),
		).toMatchSnapshot()
	})
})
