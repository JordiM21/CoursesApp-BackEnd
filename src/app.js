const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");
const handleError = require("./middlewares/error");
const userRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");
const authRoutes = require("./routes/auth.routes");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000; // undefined

db.authenticate() // devuelve una promesa
	.then(() => console.log("Auth Success"))
	.catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
	.then(() => console.log("Sync Success"))
	.catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
	res.status(200).json({ messge: "ok" });
	next();
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
