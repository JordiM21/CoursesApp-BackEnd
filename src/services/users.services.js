const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/userCourses.models");

class UserServices {
	static async getById(id) {
		try {
			const result = await Users.findByPk(id, {
				attributes: [
					"id",
					"first_name",
					"last_name",
					"email",
				],
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async getUserJoinCourses(id) {
		try {
			const result = await Users.findOne({
				where: { id },
				attributes: [
					"id",
					"first_name",
					"last_name",
					"email",
				],
				include: {
					model: UsersCourses,
					as: "courses",
					attributes: ["coursesId"],
					include: {
						model: Courses,
						as: "course",
						attributes: ["title"],
					},
				},
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async add(newUser) {
		try {
			const result = await Users.create(newUser, {
				attributes: [
					"first_name",
					"last_name",
					"password",
					"email",
				],
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async update(first_name, last_name, password, id) {
		try {
			const updateUser = { first_name, last_name, password };
			const result = await Users.update(updateUser, {
				where: { id },
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = UserServices;
