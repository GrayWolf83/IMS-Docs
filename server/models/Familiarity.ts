const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Department from './Department'
import Document from './Document'

const Familiarity = DB.define('Familiarity', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	department: {
		type: DataTypes.UUID,
		references: {
			model: Department,
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

Familiarity.belongsTo(Department, {
	foreignKey: 'department',
})

Familiarity.belongsTo(Document, {
	foreignKey: 'document',
})

export default Familiarity
