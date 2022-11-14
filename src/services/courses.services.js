const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class CoursesServices {
	static async getAll() {
		try {
			const result = await Courses.findAll();
			return result;
		} catch (error) {
			throw error;
		}
	}
	//CHECK ATTRIBUTES BOTH
	static async getAllDetails() {
		try {
			const result = await Courses.findAll({
				include: [
					{
						model: Categories,
						as: "categories",
						attributes: ["name"],
					},
					{
						model: Videos,
						as: "videos",
						attributes: ["title", "url"],
					},
				],
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async create(title, description, instructor) {
		try {
			const course = await Courses.create({
				title,
				description,
				instructor,
			});
			return course;
		} catch (error) {
			throw error;
		}
	}
	static async update(description, id) {
		try {
			const result = await Courses.update(
				{ description },
				{ where: { id } }
			);

			return result;
		} catch (error) {
			throw error;
		}
	}
}
module.exports = CoursesServices;
