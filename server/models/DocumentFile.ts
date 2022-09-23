const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Document from './Document'
import File from './File'

const DocumentFile = DB.define('DocumentFile', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	document: {
		type: DataTypes.UUID,
		references: {
			model: Document,
			key: 'id',
		},
	},
	file: {
		type: DataTypes.UUID,
		references: {
			model: File,
			key: 'id',
		},
	},
})

DocumentFile.belongsTo(Document, {
	foreignKey: 'document',
})

DocumentFile.belongsTo(File, {
	foreignKey: 'file',
})

export default DocumentFile
