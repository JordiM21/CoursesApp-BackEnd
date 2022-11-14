const Categories = require("../models/categories.models");

class servicesCategories {
	static async create(newCategorie) {
		try {
			const result = await Categories.create(newCategorie);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async delete(id) {
		try {
			const result = await Categories.delete({
				where: { id },
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = servicesCategories;
