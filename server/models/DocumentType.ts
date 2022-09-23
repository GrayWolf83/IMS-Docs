const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Document from './Document'
import Type from './Type'

const DocumentType = DB.define('DocumentType', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	type: {
		type: DataTypes.UUID,
		references: {
			model: Type,
			key: 'id',
		},
	},
	document: {
		type: DataTypes.UUID,
		references: {
			model: Document,
			key: 'id',
		},
	},
})

DocumentType.belongsTo(Type, {
	foreignKey: 'type',
})

DocumentType.belongsTo(Document, {
	foreignKey: 'document',
})

export default DocumentType
