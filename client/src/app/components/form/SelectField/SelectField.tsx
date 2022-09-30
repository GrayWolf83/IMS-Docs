import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Select,
} from '@chakra-ui/react'
import React from 'react'
import useColor from '../../../hooks/useColor'
import { IDepartment } from '../../../types/department'
import { IPosition } from '../../../types/position'

interface ISelectField {
	name: string
	label: string
	items: IPosition[] | IDepartment[]
	error?: string | null
	onChange?: (value: { [key: string]: string }) => void
	value?: string
}

const SelectField: React.FC<ISelectField> = ({
	name,
	label,
	items,
	error,
	onChange,
	value,
}) => {
	const { light } = useColor()

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange({ [e.target.name]: e.target.value })
		}
	}

	return (
		<FormControl
			data-testid='SelectField'
			my='20px'
			isInvalid={Boolean(error)}>
			<FormLabel>{label}</FormLabel>
			<Select
				placeholder='Выбрать ...'
				variant='outline'
				onChange={handleChange}
				value={value}
				name={name}
				borderColor={light}
				_focusVisible={{
					borderColor: 'none',
				}}
				_hover={{
					borderColor: light,
				}}>
				{items.map((item) => (
					<option key={item.id} value={item.id}>
						{item.name}
					</option>
				))}
			</Select>
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}

export default SelectField
