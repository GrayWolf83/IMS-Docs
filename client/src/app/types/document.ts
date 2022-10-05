export interface IDocument extends IDoc {
	id: string
}

export interface INewDocument extends IDoc {
	familiarity: string[]
}

export interface IDoc {
	index: number
	number: string
	name: string
	owner: string
	system: string
}
