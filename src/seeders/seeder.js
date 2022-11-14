const db = require("../utils/database");
const initModels = require("../models/init.models");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const userCourses = require("../models/userCourses.models");

// arreglos con la información que se va a plantar
initModels();

const users = [
	{
		first_name: "Ian",
		last_name: "Rosas",
		email: "ian@gmail.com",
		password: "1234",
	},
	{
		first_name: "Jordi",
		last_name: "Alvis",
		email: "alvis@gmail.com",
		password: "1234",
	},
	{
		first_name: "Carlos",
		last_name: "García",
		email: "carlos@gmail.com",
		password: "1234",
	},
];

const courses = [
	{
		title: "Learn Figma",
		description:
			"Use UI/UX knowledge to improve your pages and complement your code skills",
		instructor: "Dalto",
	},
	{
		title: "How to code without coding",
		description:
			"Learn how to use a IA in order to make easy developers life",
		instructor: "CarlosDEV",
	},
	{
		title: "Learn C++",
		description:
			"There is a realle important tool for coding and if you learn it, it'll be easy to learn another code format",
		instructor: "BroCoder",
	},
	{
		title: "VS code for beginers",
		description:
			"This tool is going to make super easy the way you use to code",
		instructor: "Sr dev",
	},
];

const videos = [
	{
		title: "Crear seeders",
		url: "www.creatingseeders.com",
		course_id: 1,
	},
	{
		title: "Pasear al perro",
		url: "www.gotowalkthedog.com",
		course_id: 2,
	},
	{
		title: "Tomar dos litros de agua",
		url: "www.drinkwather.com",
		course_id: 3,
	},
];

const categories = [
	{ name: "personal", course_id: 1 }, //
	{ name: "escuela", course_id: 2 }, //
	{ name: "salud", course_id: 1 }, //
	{ name: "trabajo", course_id: 2 }, //
	{ name: "hogar", course_id: 3 }, //
	{ name: "deporte", course_id: 2 }, //
	{ name: "ocio", course_id: 3 }, //
	{ name: "financiero", course_id: 1 }, //
];

const uc = [
	{ userId: 1, coursesId: 2 },
	{ userId: 2, coursesId: 3 },
	{ userId: 3, coursesId: 1 },
	{ userId: 1, coursesId: 1 },
	{ userId: 2, coursesId: 2 },
	{ userId: 3, coursesId: 3 },
];
db.sync({ force: true }).then(async () => {
	console.log("Iniciando plantación");

	users.forEach((user) => Users.create(user));

	setTimeout(() => {
		courses.forEach((course) => Courses.create(course));
	}, 100);
	setTimeout(() => {
		categories.forEach((category) => Categories.create(category));
	}, 200);
	setTimeout(() => {
		videos.forEach((video) => Videos.create(video));
	}, 300);
	setTimeout(() => {
		uc.forEach((u) => userCourses.create(u));
	}, 300);
});
