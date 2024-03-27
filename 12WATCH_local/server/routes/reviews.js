const express = require("express");
const router = express.Router();
const con = require("../db/conn");

// GET /review/{anime_name}
router.get("/:anime_name", (req, res) => {
	const anime_name = req.params.anime_name;

	const sql = "SELECT * FROM reviews WHERE anime_name = ?";
	con.query(sql, [anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json(result);
	});
});

// GET /review/{anime_name}/{username}
router.get("/:anime_name/:username", (req, res) => {
	const anime_name = req.params.anime_name;
	const username = req.params.username;

	const sql = "SELECT * FROM reviews WHERE anime_name = ? AND username = ?";
	con.query(sql, [anime_name, username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json(result);
	});
});

// POST /review/{anime_name}/{username}
router.post("/:anime_name/:username", (req, res) => {
	const { anime_name, username } = req.params;
	const { content, date, recommend, spoiler, star_rating, upvote } = req.body;

	const getReviewQuery =
		"SELECT * FROM reviews WHERE anime_name = ? AND username = ?;";
	con.query(getReviewQuery, [anime_name, username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		if (result.length !== 0) {
			return res.status(400).json({ message: "You already wrote a review" });
		}
		const insertQuery =
			"INSERT INTO reviews (anime_name, username, content, date, recommend, spoiler, star_rating, upvote) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
		con.query(
			insertQuery,
			[
				anime_name,
				username,
				content,
				date,
				recommend,
				spoiler,
				star_rating,
				upvote,
			],
			(err, result) => {
				if (err) {
					return res.status(500).json({ error: err.message });
				}

				res.json({ message: "Review written" });
			}
		);
	});
});

// PUT /review/{anime_name}/{username}
router.put("/:anime_name/:username", (req, res) => {
	const { anime_name, username } = req.params;
	const body = req.body;

	const updateValues = [];
	let updateQuery = "UPDATE reviews SET ";

	// Build the SET clause dynamically based on the fields provided in the request body
	Object.keys(body).forEach((key, index) => {
		updateQuery += `${key} = ?, `;
		updateValues.push(body[key]);
	});

	updateQuery = updateQuery.slice(0, -2); // Remove the trailing comma and space
	updateQuery += " WHERE anime_name = ? AND username = ?";

	updateValues.push(anime_name, username);

	con.query(updateQuery, updateValues, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "Review edited" });
	});
});

// DELETE /review
router.delete("/", (req, res) => {
	const { anime_name, username } = req.body;

	const deleteQuery =
		"DELETE FROM reviews WHERE anime_name = ? AND username = ?";
	con.query(deleteQuery, [anime_name, username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "Review deleted" });
	});
});

module.exports = router;
