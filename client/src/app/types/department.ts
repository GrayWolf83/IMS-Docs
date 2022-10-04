export interface IDepartment extends INewDepartment {
	id: string
}

export interface INewDepartment {
	name: string
	fullName: string
	index: number
}
