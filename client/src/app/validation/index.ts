import * as yup from 'yup'

export const addSystemSchema = yup.object().shape({
	fullName: yup
		.string()
		.required({
			name: 'fullName',
			text: 'Поле "Полное наименовани" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Сокращениее" обязательно для заполнения',
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
