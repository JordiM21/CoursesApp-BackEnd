const db = require("../utils/database");
const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

const Users = db.define(
	"users",
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			},
			allowNull: false,
		},
	}
	// {
	// 	hooks: {
	// 		beforeCreate: (users, options) => {
	// 			const { password } = users;
	// 			const hash = bcrypt.hashSync(password, 8); // devuelve las contraseña en un hash (encriptada)
	// 			users.password = hash;
	// 		},
	// 	},
	// }
);

module.exports = Users;
