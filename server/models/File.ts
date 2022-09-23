const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const File = DB.define('File', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	language: {
		type: DataTypes.ENUM('ru', 'kz', 'en'),
		allowNull: false,
	},
	path: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

File.belongsTo(Document, {
	foreignKey: 'document',
})

export default File
