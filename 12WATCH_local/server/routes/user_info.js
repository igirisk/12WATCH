const express = require("express");
const router = express.Router();
const con = require("../db/conn");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const secretKey = "xdddxdxddsxx";

function hashPassword(password) {
	const hash = crypto.createHash("sha256");
	hash.update(password);
	return hash.digest("hex");
}

function generateToken(username) {
	const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour
	return token;
}

function verifyToken(token) {
	try {
		const decoded = jwt.verify(token, secretKey);
		return decoded.username;
	} catch (error) {
		throw new Error("Invalid token");
	}
}

// POST /user/login
router.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const sql = "SELECT * FROM user_info WHERE username = ?";
	con.query(sql, [username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		if (result.length === 0) {
			return res.status(404).json({ message: "User not found" });
		}

		const storedPassword = result[0].password;
		const hashedPassword = hashPassword(password);

		if (storedPassword !== hashedPassword) {
			return res.status(401).json({ message: "Invalid password" });
		}

		const token = generateToken(username);
		const { email, backgroundImg, profilePic } = result[0];

		res.json({
			message: "Login successful",
			token,
			username,
			email,
			backgroundImg,
			profilePic,
		});
	});
});

// POST /user/register
router.post("/register", (req, res) => {
	const { username, email, password } = req.body;

	const hashedPassword = hashPassword(password);

	const sql =
		"INSERT INTO user_info (username, email, password) VALUES (?, ?, ?)";
	con.query(sql, [username, email, hashedPassword], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "User registered" });
	});
});

// PUT /user/update
router.put("/update", (req, res) => {
	const token = req.body.token;
	const username = verifyToken(token);

	const { email, password } = req.body;

	const updateUserQuery = "UPDATE user_info SET ";
	const updateValues = [];
	const updateFields = [];

	if (email) {
		updateFields.push("email = ?");
		updateValues.push(email);
	}

	if (password) {
		const hashedPassword = hashPassword(password);
		updateFields.push("password = ?");
		updateValues.push(hashedPassword);
	}

	if (updateFields.length === 0) {
		return res.status(400).json({ message: "No fields to update" });
	}

	updateValues.push(username); // Add username to the end of the array

	const sql = `${updateUserQuery}${updateFields.join(", ")} WHERE username = ?`;

	con.query(sql, updateValues, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "User updated" });
	});
});

// DELETE /user/delete
router.delete("/delete", (req, res) => {
	const token = req.body.token;
	const username = verifyToken(token);

	const sql = "DELETE FROM user_info WHERE username = ?";
	con.query(sql, [username], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}

		res.json({ message: "User deleted" });
	});
});

module.exports = router;
