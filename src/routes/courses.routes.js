const { Router } = require("express");
const {
	getAllCourses,
	getAllCoursesWithDetails,
	createCourse,
	updateCourse,
} = require("../controllers/courses.controllers");

const router = Router();

//agregar curso a user ????? tabla pivote?
router.patch("/courses/:id");

//obtener todos los cursos
//obtener por userId? Debemos autenticarlo
router.get("/courses", getAllCourses);

//get courses with CATEGORIES and VIDEOS (todos los cursos de un user?)
router.get("/courses/details", getAllCoursesWithDetails);

//createCourse
router.post("/courses", createCourse);

//updateCourse
router.put("/courses/:id", updateCourse);

module.exports = router;
