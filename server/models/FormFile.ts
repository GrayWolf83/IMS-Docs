const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import File from './File'
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
	file: {
		type: DataTypes.UUID,
		references: {
			model: File,
			key: 'id',
		},
	},
})

FormFile.belongsTo(Form, {
	foreignKey: 'form',
})

FormFile.belongsTo(File, {
	foreignKey: 'file',
})

export default FormFile
