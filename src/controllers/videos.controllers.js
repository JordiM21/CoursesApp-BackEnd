const servicesVideos = require("../services/videos.services");

const createVideo = async (req, res, next) => {
	try {
		const newVideo = req.body;
		const result = await servicesVideos.create(newVideo);
		res.status(201).json({ message: "video created successfuly!" });
	} catch (error) {
		next(error);
	}
};
const deleteVideo = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await servicesVideos.delete(id);
		res.status(200).json({ message: "video deleted successfuly!" });
	} catch (error) {
		next(error);
	}
};

module.exports = { createVideo, deleteVideo };
