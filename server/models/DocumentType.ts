const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const DocumentType = DB.define('DocumentType', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	index: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default DocumentType
