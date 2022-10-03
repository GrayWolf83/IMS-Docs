const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Document from './Document'

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
	language: {
		type: DataTypes.ENUM('ru', 'kz', 'en'),
		defaultValue: 'User',
		allowNull: false,
	},
	path: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

DocumentFile.belongsTo(Document, {
	foreignKey: 'document',
})

export default DocumentFile
