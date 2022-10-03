const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Form from './Form'

const FormFile = DB.define('FormFile', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	form: {
		type: DataTypes.UUID,
		references: {
			model: Form,
			key: 'id',
		},
	},
	language: {
		type: DataTypes.ENUM('ru', 'kz', 'en'),
		defaultValue: 'User',
		allowNull: false,
	},
	path: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

FormFile.belongsTo(Form, {
	foreignKey: 'form',
})

export default FormFile
