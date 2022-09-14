const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import User from './User'

const Token = DB.define('Token', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	user: {
		type: DataTypes.UUID,
		references: {
			model: User,
			key: 'id',
		},
	},
	refreshToken: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default Token
