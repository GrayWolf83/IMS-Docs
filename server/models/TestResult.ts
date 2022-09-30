const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Document from './Document'
import User from './User'

const TestResult = DB.define('TestResult', {
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
	user: {
		type: DataTypes.UUID,
		references: {
			model: User,
			key: 'id',
		},
	},
	result: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

TestResult.belongsTo(Document, {
	foreignKey: 'document',
})

TestResult.belongsTo(User, {
	foreignKey: 'user',
})

export default TestResult
