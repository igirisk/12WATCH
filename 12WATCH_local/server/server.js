const express = require("express");
const path = require("path");
const animeInfoRouter = require("./routes/anime_info.js");
const userInfoRouter = require("./routes/user_info.js");
const userImgRouter = require("./routes/user_img.js");
const personalListRouter = require("./routes/personal_list.js");
const reviewRouter = require("./routes/reviews.js");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// Increase payload size limit to 50MB
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// Mount router
app.use("/anime_info", animeInfoRouter);
app.use("/user", userInfoRouter);
app.use("/userImg", userImgRouter);
app.use("/list", personalListRouter);
app.use("/review", reviewRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
