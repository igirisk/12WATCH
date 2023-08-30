const mysql = require("mysql");

const con = mysql.createConnection({
	host: "use#######om",
	user: "######",
	password: "#######",
	port: "######",
	database: "##",
});

exports.handler = (event, context, callback) => {
	let sql;
	let body;
	context.callbackWaitsForEmptyEventLoop = false;

	switch (event.routeKey) {
		case "GET /userImg/{username}":
			sql = "SELECT * FROM user_img.img WHERE username = ?;";
			con.query(sql, [event.pathParameters.username], function (err, result) {
				if (err) {
					return callback(err);
				}
				return callback(null, result);
			});
			break;

		case "POST /userImg":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO user_img.img (username,backgroundImg, profilePic) VALUES (?, ? ,?); ";
			con.query(
				sql,
				[body.username, body.profilePic, body.backgroundImg],
				function (err, result) {
					if (err) {
						return callback(err);
					}
					return callback(null, result);
				}
			);
			break;

		case "PUT /userImg/profilePic/{username}":
			body = JSON.parse(event.body);
			sql = "UPDATE user_img.img SET profilePic = ? WHERE username = ?";
			con.query(
				sql,
				[body.profilePic, event.pathParameters.username],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "PUT /userImg/backgroundImg/{username}":
			body = JSON.parse(event.body);
			sql = "UPDATE user_img.img SET backgroundImg = ? WHERE username = ?";
			con.query(
				sql,
				[body.backgroundImg, event.pathParameters.username],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "DELETE /userImg/{username}":
			sql = "DELETE FROM user_img.img WHERE username = ?;";
			con.query(sql, [event.pathParameters.username], function (err, result) {
				if (err) {
					return callback(err);
				}
				return callback(null, result);
			});
			break;

		default:
			return callback(new Error("Unsupported route: " + event.routeKey));
	}
};
