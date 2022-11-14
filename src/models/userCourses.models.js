const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Courses = require("./courses.models");

//task(USER) -- categories(COURSES)
const UsersCourses = db.define(
	"users_courses",
	{
		id: {
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		coursesId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Courses,
				key: "id",
			},
			field: "course_id",
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Users,
				key: "id",
			},
			field: "user_id",
		},
	},
	{
		timestamps: false,
	}
);

module.exports = UsersCourses;
