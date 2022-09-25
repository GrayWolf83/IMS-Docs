export interface IUser {
	id: string
	name: string
	role: 'User' | 'Manage'
	position: string
	department: string
	phone: string
	email: string
}
