export interface IUser extends INewUser {
	id: string
	role: 'User' | 'Manage'
}

export interface INewUser {
	name: string
	position: string
	department: string
	phone: string
	email: string
}
