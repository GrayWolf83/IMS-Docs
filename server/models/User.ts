const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import Department from './Department'
import Position from './Position'

const User = DB.define('User', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	position: {
		type: DataTypes.UUID,
		references: {
			model: Position,
			key: 'id',
		},
	},
	department: {
		type: DataTypes.UUID,
		references: {
			model: Department,
			key: 'id',
		},
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.ENUM('User', 'HR', 'ISM'),
		defaultValue: 'User',
		allowNull: false,
	},
})

User.belongsTo(Position, {
	foreignKey: 'position',
})
User.belongsTo(Department, {
	foreignKey: 'department',
})

export default User
