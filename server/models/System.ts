const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const System = DB.define('System', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	fullName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default System
