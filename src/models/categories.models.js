const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define(
	"categories",
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		courseId: {
			field: "course_id",
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = Categories;
