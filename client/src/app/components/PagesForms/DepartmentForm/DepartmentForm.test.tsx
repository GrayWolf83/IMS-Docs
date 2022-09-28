import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import DepartmentForm from './DepartmentForm'

describe('DepartmentForm component', () => {
	test('DepartmentForm render', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<DepartmentForm onSubmit={() => {}} />
				</BrowserRouter>
			</Provider>,
		)

		const departmentForm = screen.getByTestId('DepartmentForm')
		expect(departmentForm).toBeInTheDocument()
	})

	test('DepartmentForm snapshot', () => {
		expect(
			render(
				<Provider store={store}>
					<BrowserRouter>
						<DepartmentForm onSubmit={() => {}} />
					</BrowserRouter>
				</Provider>,
			),
		).toMatchSnapshot()
	})
})
