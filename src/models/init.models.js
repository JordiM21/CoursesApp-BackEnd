const Users = require("./users.models");
const Courses = require("./courses.models");
const UsersCourses = require("./userCourses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");

const initModels = () => {
	//many to many, M users - M courses

	//1 User --- M courses
	UsersCourses.belongsTo(Users, {
		as: "user",
		foreignKey: "user_id",
	});
	Users.hasMany(UsersCourses, {
		as: "courses",
		foreignKey: "user_id",
	});

	//1 course -- M Users
	UsersCourses.belongsTo(Courses, {
		as: "course",
		foreignKey: "course_id",
	});
	Courses.hasMany(UsersCourses, {
		as: "users",
		foreignKey: "course_id",
	});

	//1course -- M categories
	Categories.belongsTo(Courses, {
		as: "courses",
		foreignKey: "course_id",
	});

	Courses.hasMany(Categories, {
		as: "categories",
		foreignKey: "course_id",
	});

	//1course -- M videos
	Videos.belongsTo(Courses, {
		as: "courses",
		foreignKey: "course_id",
	});
	Courses.hasMany(Videos, {
		as: "videos",
		foreignKey: "course_id",
	});
};

module.exports = initModels;
