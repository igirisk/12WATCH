const express = require("express");
const router = express.Router();
const con = require("../db/conn");

// GET /list
router.post("/", (req, res) => {
	const { username, list_name } = req.body;

	const sql =
		"SELECT * FROM personal_list WHERE username = ? AND list_name = ?";
	con.query(sql, [username, list_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json(result);
	});
});

// POST /add
router.post("/add", (req, res) => {
	const { username, anime_name, list_name } = req.body;

	// Check if the entry exists in the list
	const getEntryQuery =
		"SELECT * FROM personal_list WHERE username = ? AND anime_name = ?";
	con.query(getEntryQuery, [username, anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		if (result.length === 0) {
			// Entry doesn't exist, perform insert
			const insertQuery =
				"INSERT INTO personal_list (username, anime_name, list_name) VALUES (?, ?, ?)";
			con.query(
				insertQuery,
				[username, anime_name, list_name],
				(err, result) => {
					if (err) {
						return res.status(500).json({ error: err.message });
					}
					res.json({ message: "Anime added to list" });
				}
			);
		} else {
			// Entry exists, perform update
			const { list_name: currentListName } = result[0];
			const newListName = list_name || currentListName; // Use the provided list_name or keep the current one

			const updateQuery =
				"UPDATE personal_list SET list_name = ? WHERE username = ? AND anime_name = ?";
			con.query(
				updateQuery,
				[newListName, username, anime_name],
				(err, result) => {
					if (err) {
						return res.status(500).json({ error: err.message });
					}
					res.json({ message: "List updated" });
				}
			);
		}
	});
});

// DELETE /list
router.delete("/", (req, res) => {
	const { username, anime_name } = req.body;

	const deleteQuery =
		"DELETE FROM personal_list WHERE username = ? AND anime_name = ?";
	con.query(deleteQuery, [username, anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "Anime deleted from list" });
	});
});

module.exports = router;
