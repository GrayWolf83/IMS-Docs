const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const Department = DB.define('Department', {
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
	index: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
})

export default Department
