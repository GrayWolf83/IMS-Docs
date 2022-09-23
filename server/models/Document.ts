const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Department from './Department'
import System from './System'

const Document = DB.define('Document', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	index: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	version: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	owner: {
		type: DataTypes.UUID,
		references: {
			model: Department,
			key: 'id',
		},
	},
	system: {
		type: DataTypes.UUID,
		references: {
			model: System,
			key: 'id',
		},
	},
})

Document.belongsTo(Department, {
	foreignKey: 'owner',
})

Document.belongsTo(System, {
	foreignKey: 'system',
})

export default Document
