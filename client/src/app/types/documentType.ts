export interface INewDocumentType {
	index: string
	description: string
}

export interface IDocumentType extends INewDocumentType {
	id: string
}
