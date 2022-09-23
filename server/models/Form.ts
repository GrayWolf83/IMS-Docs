const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'

const Form = DB.define('Form', {
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
	document: {
		type: DataTypes.UUID,
		references: {
			model: Document,
			key: 'id',
		},
	},
})

Form.belongsTo(Document, {
	foreignKey: 'document',
})

export default Form
