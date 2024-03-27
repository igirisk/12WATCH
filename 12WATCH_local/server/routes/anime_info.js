const express = require("express");
const router = express.Router();
const con = require("../db/conn");

// --------------------------Get-------------------------------
// GET /anime_info
router.get("/", (req, res) => {
	const sql = "SELECT * FROM 12watch.anime_info;";
	con.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/{anime_name}
router.get("/:anime_name", (req, res) => {
	const sql = "SELECT * FROM 12watch.anime_info WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/character/{anime_name}
router.get("/character/:anime_name", (req, res) => {
	const sql =
		"SELECT character_name, character_role, character_image, voice_actor, voice_actor_nationality, voice_actor_image FROM 12watch.characters WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/genre/{anime_name}
router.get("/genre/:anime_name", (req, res) => {
	const sql = "SELECT genre FROM 12watch.genres WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/producer/{anime_name}
router.get("/producer/:anime_name", (req, res) => {
	const sql = "SELECT producer FROM 12watch.producers WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/staff/{anime_name}
router.get("/staff/:anime_name", (req, res) => {
	const sql =
		"SELECT  staff_name,staff_role,staff_image FROM 12watch.staffs WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/studio/{anime_name}
router.get("/studio/:anime_name", (req, res) => {
	const sql = "SELECT studio FROM 12watch.studios WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/trailer/{anime_name}
router.get("/trailer/:anime_name", (req, res) => {
	const sql = "SELECT trailer FROM 12watch.trailers WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// GET /anime_info/card/{anime_name}
router.get("/card/:anime_name", (req, res) => {
	const sql =
		"SELECT 12watch.anime_info.anime_name, 12watch.anime_info.synopsis, 12watch.anime_info.thumbnail, 12watch.anime_info.star_rating, 12watch.anime_info.recommend_percent, 12watch.anime_info.source_origin, 12watch.genres.genre, 12watch.studios.studio FROM 12watch.anime_info INNER JOIN 12watch.genres ON 12watch.anime_info.anime_name=12watch.genres.anime_name INNER JOIN 12watch.studios ON 12watch.anime_info.anime_name=12watch.studios.anime_name;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// --------------------------Add----------------------------------
// POST /anime_info
router.post("/", (req, res) => {
	const sql =
		"INSERT INTO 12watch.anime_info (anime_name, synopsis, thumbnail, background_image, episode_count, episode_duration, source_origin, star_rating, recommend_percent, format_type, completion_status) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
	con.query(
		sql,
		[
			req.body.anime_name,
			req.body.synopsis,
			req.body.thumbnail,
			req.body.background_image,
			req.body.episode_count,
			req.body.episode_duration,
			req.body.source_origin,
			req.body.star_rating,
			req.body.recommend_percent,
			req.body.format_type,
			req.body.completion_status,
		],
		(err, result) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			res.json(result);
		}
	);
});

// POST /anime_info/character
router.post("/character", (req, res) => {
	const sql =
		"INSERT INTO 12watch.characters (anime_name, character_name, character_role, character_image, voice_actor, voice_actor_nationality, voice_actor_image) VALUES (?,?,?,?,?,?,?);";
	con.query(
		sql,
		[
			req.body.anime_name,
			req.body.character_name,
			req.body.character_role,
			req.body.character_image,
			req.body.voice_actor,
			req.body.voice_actor_nationality,
			req.body.voice_actor_image,
		],
		(err, result) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			res.json(result);
		}
	);
});

// POST /anime_info/genre
router.post("/genre", (req, res) => {
	const sql = "INSERT INTO 12watch.genres (anime_name, genre) VALUES (?,?);";
	con.query(sql, [req.body.anime_name, req.body.genre], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// POST /anime_info/producer
router.post("/producer", (req, res) => {
	const sql =
		"INSERT INTO 12watch.producers(anime_name, producer) VALUES (?,?);";
	con.query(sql, [req.body.anime_name, req.body.producer], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// POST /anime_info/staff
router.post("/staff", (req, res) => {
	const sql =
		"INSERT INTO 12watch.staffs(anime_name, staff_name, staff_role, staff_image) VALUES (?,?,?,?);";
	con.query(
		sql,
		[
			req.body.anime_name,
			req.body.staff_name,
			req.body.staff_role,
			req.body.staff_image,
		],
		(err, result) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			res.json(result);
		}
	);
});

// POST /anime_info/studio
router.post("/studio", (req, res) => {
	const sql = "INSERT INTO 12watch.studios(anime_name, studio) VALUES (?,?);";
	con.query(sql, [req.body.anime_name, req.body.studio], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// POST /anime_info/trailer
router.post("/trailer", (req, res) => {
	const sql = "INSERT INTO 12watch.trailers(anime_name, trailer) VALUES (?,?);";
	con.query(sql, [req.body.anime_name, req.body.trailer], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

//--------------------------Update----------------------------------
// PUT /anime_info/{anime_name}
router.put("/:anime_name", (req, res) => {
	const anime_name = req.params.anime_name;
	const updateFields = [];
	const updateValues = [];

	for (const key in req.body) {
		if (req.body.hasOwnProperty(key)) {
			updateFields.push(`${key} = ?`);
			updateValues.push(req.body[key]);
		}
	}

	if (updateFields.length === 0) {
		return res.status(400).json({ message: "No fields to update" });
	}

	updateValues.push(anime_name);
	const updateQuery = `UPDATE 12watch.anime_info SET ${updateFields.join(
		", "
	)} WHERE anime_name = ?;`;

	con.query(updateQuery, updateValues, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// PUT /anime_info/character/{character_name}/{voice_actor}
router.put("/character/:character_name/:voice_actor", (req, res) => {
	const { character_name, voice_actor } = req.params;
	const updateFields = [];
	const updateValues = [];

	for (const key in req.body) {
		if (req.body.hasOwnProperty(key)) {
			updateFields.push(`${key} = ?`);
			updateValues.push(req.body[key]);
		}
	}

	if (updateFields.length === 0) {
		return res.status(400).json({ message: "No fields to update" });
	}

	updateValues.push(character_name, voice_actor);
	const updateQuery =
		"UPDATE 12watch.characters SET " +
		updateFields.join(", ") +
		" WHERE character_name = ? AND voice_actor = ?;";

	con.query(updateQuery, updateValues, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

// PUT /anime_info/staff/{anime_name}/{staff_name}/{staff_role}
router.put("/staff/:anime_name/:staff_name/:staff_role", (req, res) => {
	const { anime_name, staff_name, staff_role } = req.params;
	const updateFields = [];
	const updateValues = [];

	for (const key in req.body) {
		if (req.body.hasOwnProperty(key)) {
			updateFields.push(`${key} = ?`);
			updateValues.push(req.body[key]);
		}
	}

	if (updateFields.length === 0) {
		return res.status(400).json({ message: "No fields to update" });
	}

	updateValues.push(anime_name, staff_name, staff_role);
	const updateQuery =
		"UPDATE 12watch.staffs SET " +
		updateFields.join(", ") +
		" WHERE anime_name = ? AND staff_name = ? AND staff_role = ?;";

	con.query(updateQuery, updateValues, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

//--------------------------Delete----------------------------------
// DELETE /anime_info/{anime_name}
router.delete("/:anime_name", (req, res) => {
	const sql = "DELETE FROM 12watch.anime_info WHERE anime_name = ?;";
	con.query(sql, [req.params.anime_name], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(result);
	});
});

module.exports = router;
