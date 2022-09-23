export interface IUser {
	id: string
	name: string
	position: string
	department: string
	phone: string
	email: string
	role: 'User' | 'Manage'
}
