const servicesCategories = require("../services/categories.services");

const createCategorie = async (req, res, next) => {
	try {
		const newCategorie = req.body;
		const result = await servicesCategories.create(newCategorie);
		res.status(201).json({
			message: "categorie created successfuly!",
		});
	} catch (error) {
		next(error);
	}
};
const deleteCategorie = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await servicesCategories.delete(id);
		res.status(200).json({ message: "video deleted successfuly!" });
	} catch (error) {
		next(error);
	}
};

module.exports = { createCategorie, deleteCategorie };
