const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const Position = DB.define('Position', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	index: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
})

export default Position
