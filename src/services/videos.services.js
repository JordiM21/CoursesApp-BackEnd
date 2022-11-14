const Videos = require("../models/videos.models");

class servicesVideos {
	static async create(newVideo) {
		try {
			const result = await Videos.create(newVideo);
			return result;
		} catch (error) {
			throw error;
		}
	}

	static async delete(id) {
		try {
			const result = await Videos.delete({ where: { id } });
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = servicesVideos;
