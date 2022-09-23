const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const Type = DB.define('Type', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default Type
