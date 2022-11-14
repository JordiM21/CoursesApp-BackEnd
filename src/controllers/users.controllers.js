const UserServices = require("../services/users.services");

const getUserById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await UserServices.getById(id);
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};
const getUserWithCourses = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await UserServices.getUserJoinCourses(id);
		res.status(200).json(result);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Please check the info you send",
		});
	}
};
const createUser = async (req, res, next) => {
	try {
		const newUser = req.body;
		const result = await UserServices.add(newUser);
		res.status(201).json(result);
	} catch (error) {
		next({
			status: 418,
			errorContent: error,
			message: "Please check the info you send",
		});
	}
};
const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userToUpdate = req.body;
		const { first_name, last_name, password } = userToUpdate;
		const result = await UserServices.update(
			first_name,
			last_name,
			password,
			id
		);
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getUserById,
	getUserWithCourses,
	createUser,
	updateUser,
};
