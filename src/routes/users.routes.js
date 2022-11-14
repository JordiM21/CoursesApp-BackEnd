const { Router } = require("express");
const {
	getUserById,
	getUserWithCourses,
	createUser,
	updateUser,
} = require("../controllers/users.controllers");

const router = Router();

//getUserById
router.get("/users/:id", getUserById);

//getUserWithCourses
router.get("/users/:id/courses", getUserWithCourses);

//createUser
router.post("/users", createUser);

//updateUser
router.put("/users/:id", updateUser);

module.exports = router;
