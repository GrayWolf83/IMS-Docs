import * as yup from 'yup'

export const DocumentSchema = yup.object().shape({
	familiarity: yup
		.string()
		.required({
			name: 'familiarity',
			text: 'Поле "Ознакомление" обязательно для заполнения',
		})
		.trim(),
	system: yup
		.string()
		.required({
			name: 'system',
			text: 'Поле "Система" обязательно для заполнения',
		})
		.trim(),
	owner: yup
		.string()
		.required({
			name: 'owner',
			text: 'Поле "Владелец" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.trim(),
	number: yup
		.string()
		.required({
			name: 'number',
			text: 'Поле "Номер" обязательно для заполнения',
		})
		.trim(),
	index: yup.number().required({
		name: 'index',
		text: 'Поле "Индекс" обязательно для заполнения',
	}),
})

export const DocumentTypeSchema = yup.object().shape({
	description: yup
		.string()
		.required({
			name: 'description',
			text: 'Поле "Индекс" обязательно для заполнения',
		})
		.trim(),
	index: yup
		.string()
		.required({
			name: 'index',
			text: 'Поле "Индекс" обязательно для заполнения',
		})
		.trim(),
})

export const UserSchema = yup.object().shape({
	email: yup
		.string()
		.required({
			name: 'email',
			text: 'Поле "email" обязательно для заполнения',
		})
		.email({ name: 'email', text: 'email введен некорректно' }),
	phone: yup
		.string()
		.required({
			name: 'phone',
			text: 'Поле "Телефон" обязательно для заполнения',
		})
		.trim(),
	position: yup
		.string()
		.required({
			name: 'position',
			text: 'Поле "Должность" обязательно для заполнения',
		})
		.trim(),
	department: yup
		.string()
		.required({
			name: 'department',
			text: 'Поле "Подразделение" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Ф.И.О." обязательно для заполнения',
		})
		.trim(),
})

export const PositionSchema = yup.object().shape({
	index: yup.number().required({
		name: 'index',
		text: 'Поле "Индекс" обязательно для заполнения',
	}),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Сокращение" обязательно для заполнения',
		})
		.trim(),
})

export const DepartmentSchema = yup.object().shape({
	index: yup.number().required({
		name: 'index',
		text: 'Поле "Индекс" обязательно для заполнения',
	}),
	fullName: yup
		.string()
		.required({
			name: 'fullName',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Сокращение" обязательно для заполнения',
		})
		.trim(),
})

export const SystemSchema = yup.object().shape({
	fullName: yup
		.string()
		.required({
			name: 'fullName',
			text: 'Поле "Полное наименование" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Сокращение" обязательно для заполнения',
		})
		.trim(),
})

export const loginSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле "Пароль" обязательно для заполнения',
		})
		.min(8, { name: 'password', text: 'Длина пароля не менее 8  символов' })
		.trim(),
	email: yup
		.string()
		.required({
			name: 'email',
			text: 'Поле "email" обязательно для заполнения',
		})
		.email({ name: 'email', text: 'email введен некорректно' }),
})

export const signUpSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле "Пароль" обязательно для заполнения',
		})
		.min(8, {
			name: 'password',
			text: 'Длина поля "Пароль" не менее 8 символов',
		})
		.trim(),
	email: yup
		.string()
		.required({
			name: 'email',
			text: 'Поле "email" обязательно для заполнения',
		})
		.email({ name: 'email', text: 'email введен некорректно' }),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Имя" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Имя" не менее 2 символов',
		})
		.trim(),
})

export const addCategorySchema = yup.object().shape({
	image: yup
		.object()
		.nullable()
		.shape({
			name: yup.string().required({
				name: 'image',
				text: 'Не выбрана картинка',
			}),
		}),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Наименование" не менее 2 символов',
		})
		.trim(),
})

export const addProductSchema = yup.object().shape({
	image: yup
		.object()
		.nullable()
		.shape({
			name: yup.string().required({
				name: 'image',
				text: 'Не выбрана картинка',
			}),
		}),
	price: yup.number().nullable().required({
		name: 'price',
		text: 'Не указана цена',
	}),
	category: yup
		.number()
		.nullable()
		.required({
			name: 'category',
			text: 'Не выбрана категория',
		})
		.min(1, {
			name: 'category',
			text: 'Не выбрана категория',
		}),
	description: yup
		.string()
		.required({
			name: 'description',
			text: 'Поле "Описание" обязательно для заполнения',
		})
		.min(2, {
			name: 'description',
			text: 'Длина поля "Описание" не менее 2 символов',
		})
		.trim(),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Наименование" не менее 2 символов',
		})
		.trim(),
})

export const editProductSchema = yup.object().shape({
	price: yup.number().nullable().required({
		name: 'price',
		text: 'Не указана цена',
	}),
	category: yup
		.number()
		.nullable()
		.required({
			name: 'category',
			text: 'Не выбрана категория',
		})
		.min(1, {
			name: 'category',
			text: 'Не выбрана категория',
		}),
	description: yup
		.string()
		.required({
			name: 'description',
			text: 'Поле "Описание" обязательно для заполнения',
		})
		.min(2, {
			name: 'description',
			text: 'Длина поля "Описание" не менее 2 символов',
		})
		.trim(),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Наименование" не менее 2 символов',
		})
		.trim(),
})

export const sendOrderSchema = yup.object().shape({
	address: yup
		.string()
		.required({
			name: 'address',
			text: 'Поле "Адрес доставки" обязательно для заполнения',
		})
		.min(5, {
			name: 'address',
			text: 'Длина поля "Адрес доставки" не менее 5 символов',
		})
		.trim(),

	phone: yup
		.string()
		.required({
			name: 'phone',
			text: 'Поле "Телефон" обязательно для заполнения',
		})
		.min(11, {
			name: 'phone',
			text: 'Длина поля "Телефон" не менее 11 символов',
		})
		.trim(),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Имя" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Имя" не менее 2 символов',
		})
		.trim(),
})
