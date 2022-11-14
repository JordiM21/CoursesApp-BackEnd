const { Router } = require("express");

const {
	createCategorie,
	deleteCategorie,
} = require("../controllers/categories.controllers");

const router = Router();

router.post("/categories", createCategorie);

router.delete("/categories/:id", deleteCategorie);

module.exports = router;
