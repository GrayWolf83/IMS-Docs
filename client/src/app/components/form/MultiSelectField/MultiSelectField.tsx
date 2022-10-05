import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import React from 'react'
import useColor from '../../../hooks/useColor'
import { MultiSelect } from 'react-multi-select-component'

interface ISelectField {
	name: string
	label: string
	items: { id: string; name: string }[]
	error?: string | null
	onChange?: (value: { [key: string]: string }) => void
	defaultValue?: string[]
}

const MultiSelectField: React.FC<ISelectField> = ({
	name,
	label,
	items,
	error,
	onChange,
	defaultValue,
}) => {
	const { light, dark } = useColor()
	const [msValue, setMsValue] = React.useState<
		{ label: string; value: string }[]
	>([])

	React.useEffect(() => {
		const placeholder = document.querySelector('.gray')
		if (placeholder) {
			placeholder.textContent = 'Выбрать ...'
		}
	}, [])

	React.useEffect(() => {
		if (defaultValue?.length) {
			const opts = items.filter((item) => defaultValue.includes(item.id))

			setMsValue(
				opts.map((item) => ({ label: item.name, value: item.id })),
			)
		}
	}, [items, defaultValue])

	const options = items.map((item) => ({
		label: item.name,
		value: item.id,
	}))

	const handleChange = (val: { label: string; value: string }[]) => {
		setMsValue(val)

		if (onChange) {
			onChange({ [name]: val.map((item) => item.value).join(' ') })
		}
	}

	return (
		<FormControl
			css={{
				'.rmsc .dropdown-container, .multi-select .dropdown-container:focus-within':
					{
						color: light,
						backgroundColor: 'transparent',
						border: `2px solid ${light}`,
						borderColor: light,
						boxShadow: 'none',
					},
				'.rmsc .light': {
					color: light,
				},
				'.multi-select .dropdown-content *': {
					color: light,
					backgroundColor: '#ccc',
					boxShadow: 'none',
				},
			}}
			data-testid='MultiSelectField'
			my='20px'
			isInvalid={Boolean(error)}>
			<FormLabel>{label}</FormLabel>
			<MultiSelect
				options={options}
				labelledBy='select'
				disableSearch={true}
				onChange={handleChange}
				hasSelectAll={false}
				value={msValue}
			/>

			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}

export default MultiSelectField
