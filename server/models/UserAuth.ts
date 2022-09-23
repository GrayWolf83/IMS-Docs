const { Sequelize, DataTypes } = require('sequelize')
import DB from '../utils/database'
import User from './User'

const UserAuth = DB.define('UserAuth', {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	user: {
		type: DataTypes.UUID,
		references: {
			model: User,
			key: 'id',
		},
	},
})

UserAuth.belongsTo(User, {
	foreignKey: 'user',
})

export default UserAuth
