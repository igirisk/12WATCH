const express = require("express");
const router = express.Router();
const con = require("../db/conn");

// GET /userImg/{username}
router.get("/:username", (req, res) => {
	const sql = "SELECT * FROM 12watch.img WHERE username = ?;";
	con.query(sql, [req.params.username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// POST /userImg
router.post("/", (req, res) => {
	const sql =
		"INSERT INTO 12watch.img (username,backgroundImg, profilePic) VALUES (?, ? ,?);";
	con.query(
		sql,
		[req.body.username, req.body.backgroundImg, req.body.profilePic],
		(err, result) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			res.json(result);
		}
	);
});

// PUT /userImg/profilePic/{username}
router.put("/profilePic/:username", (req, res) => {
	const sql = "UPDATE 12watch.img SET profilePic = ? WHERE username = ?";
	con.query(sql, [req.body.profilePic, req.params.username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// PUT /userImg/backgroundImg/{username}
router.put("/backgroundImg/:username", (req, res) => {
	const sql = "UPDATE 12watch.img SET backgroundImg = ? WHERE username = ?";
	con.query(
		sql,
		[req.body.backgroundImg, req.params.username],
		(err, result) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			res.json(result);
		}
	);
});

// DELETE /userImg/{username}
router.delete("/:username", (req, res) => {
	const sql = "DELETE FROM 12watch.img WHERE username = ?;";
	con.query(sql, [req.params.username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

module.exports = router;
