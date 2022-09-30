import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import UserForm from './UserForm'

describe('UserForm component', () => {
	test('UserForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<UserForm
						onSubmit={() => {}}
						positions={[]}
						departments={[]}
					/>
				</BrowserRouter>
			</Provider>,
		)

		const userForm = screen.getByTestId('UserForm')
		expect(userForm).toBeInTheDocument()
	})

	test('UserForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<UserForm
							onSubmit={() => {}}
							positions={[]}
							departments={[]}
						/>
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
