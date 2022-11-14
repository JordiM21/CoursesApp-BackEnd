const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res, next) => {
	try {
		const result = await CoursesServices.getAll();
		res.status(200).json({ result });
	} catch (error) {
		next(error);
	}
};
const getAllCoursesWithDetails = async (req, res, next) => {
	try {
		const result = await CoursesServices.getAllDetails();
		res.status(200).json({ result });
	} catch (error) {
		next(error);
	}
};
const createCourse = async (req, res, next) => {
	try {
		const { title, description, instructor } = req.body;
		const result = await CoursesServices.create(
			title,
			description,
			instructor
		);
		res.status(201).json({ message: "Course Created Successfuly" });
	} catch (error) {
		next(error);
	}
};
const updateCourse = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const result = await CoursesServices.update(description, id);
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};
module.exports = {
	getAllCourses,
	getAllCoursesWithDetails,
	createCourse,
	updateCourse,
};
