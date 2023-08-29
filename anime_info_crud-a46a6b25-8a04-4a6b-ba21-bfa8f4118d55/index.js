// Import mysql library
const mysql = require("mysql");
// Connect to anime_info schema
const con = mysql.createConnection({
	host: "anime-information.ce5brupzflao.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "######",
	port: "3306",
	database: "anime_info",
});
exports.handler = (event, context, callback) => {
	let sql;
	context.callbackWaitsForEmptyEventLoop = false;

	switch (event.routeKey) {
		//-------GET-------

		case "GET /anime_info":
			sql = "SELECT * FROM anime_info.anime_info;";
			con.query(sql, function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/{anime_name}":
			sql = "select * from anime_info where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/character/{anime_name}":
			sql =
				"select character_name,character_role,character_image,voice_actor,voice_actor_nationality,voice_actor_image from characters where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/genre/{anime_name}":
			sql = "SELECT genre FROM anime_info.genres WHERE anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/producer/{anime_name}":
			sql = "select producer from producers where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/staff/{anime_name}":
			sql =
				"select staff_name,staff_role,staff_image from staffs where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/studio/{anime_name}":
			sql = "select studio from studios where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/trailer/{anime_name}":
			sql = "select trailer from trailers where anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "GET /anime_info/card/{anime_name}":
			sql =
				"SELECT anime_info.anime_name, anime_info.sysnopsis, anime_info.thumbnail,anime_info.star_rating,anime_info.recommend_percent,anime_info.source_origin,genres.genre,studios.studio FROM anime_info INNER JOIN genres ON anime_info.anime_name=genres.anime_name INNER JOIN studios ON anime_info.anime_name=studios.anime_name;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		//-----Add-----

		case "POST /anime_info":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO anime_info.anime_info (anime_name, sysnopsis, thumbnail, background_image, episode_count, episode_duration, source_origin, star_rating, recommend_percent, format_type, completion_status) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
			con.query(
				sql,
				[
					body.anime_name,
					body.sysnopsis,
					body.thumbnail,
					body.background_image,
					body.episode_count,
					body.episode_duration,
					body.source_origin,
					body.star_rating,
					body.recommend_percent,
					body.format_type,
					body.completion_status,
				],
				function (err, result) {
					if (err) {
						if (err.code === "ER_DUP_ENTRY") {
							return callback(null, { errorMessage: "Duplicate entry" });
						} else {
							throw err;
						}
					}
					return callback(null, result);
				}
			);
			break;

		case "POST /anime_info/character":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO anime_info.characters (anime_name, character_name, character_role, character_image, voice_actor, voice_actor_nationality, voice_actor_image) VALUES (?,?,?,?,?,?,?); ";
			con.query(
				sql,
				[
					body.anime_name,
					body.character_name,
					body.character_role,
					body.character_image,
					body.voice_actor,
					body.voice_actor_nationality,
					body.voice_actor_image,
				],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "POST /anime_info/genre":
			body = JSON.parse(event.body);
			sql = "INSERT INTO anime_info.genres (anime_name, genre) VALUES (?,?); ";
			con.query(sql, [body.anime_name, body.genre], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "POST /anime_info/producer":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO anime_info.producers(anime_name, producer) VALUES (?,?); ";
			con.query(sql, [body.anime_name, body.producer], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "POST /anime_info/staff":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO anime_info.staffs(anime_name, staff_name, staff_role, staff_image) VALUES (?,?,?,?); ";
			con.query(
				sql,
				[body.anime_name, body.staff_name, body.staff_role, body.staff_image],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "POST /anime_info/studio":
			body = JSON.parse(event.body);
			sql = "INSERT INTO anime_info.studios(anime_name, studio) VALUES (?,?);";
			con.query(sql, [body.anime_name, body.studio], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "POST /anime_info/trailer":
			body = JSON.parse(event.body);
			sql =
				"INSERT INTO anime_info.trailers(anime_name, trailer) VALUES (?,?);";
			con.query(sql, [body.anime_name, body.trailer], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		//-------update------

		case "PUT /anime_info/{anime_name}":
			body = JSON.parse(event.body);
			sql =
				"UPDATE anime_info.anime_info SET sysnopsis = ?, thumbnail = ?, background_image = ?, episode_count = ?, episode_duration = ?, source_origin = ?, star_rating = ?, recommend_percent = ?, format_type = ?, completion_status = ? WHERE anime_name = ?;";
			con.query(
				sql,
				[
					body.sysnopsis,
					body.thumbnail,
					body.background_image,
					body.episode_count,
					body.episode_duration,
					body.source_origin,
					body.star_rating,
					body.recommend_percent,
					body.format_type,
					body.completion_status,
					event.pathParameters.anime_name,
				],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "PUT /anime_info/character/{character_name}/{voice_actor}":
			body = JSON.parse(event.body);
			sql =
				"UPDATE anime_info.characters SET character_name = ?, character_role  = ?, character_image = ?, voice_actor = ?, voice_actor_nationality = ?, voice_actor_image = ? WHERE character_name = ? AND voice_actor = ?;";
			con.query(
				sql,
				[
					body.character_name,
					body.character_role,
					body.character_image,
					body.voice_actor,
					body.voice_actor_nationality,
					body.voice_actor_image,
					event.pathParameters.character_name,
					event.pathParameters.voice_actor,
				],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "PUT /anime_info/staff/{anime_name}/{staff_name}/{staff_role}":
			body = JSON.parse(event.body);
			sql =
				"UPDATE anime_info.staffs SET staff_name = ?, staff_role  = ?, staff_image = ? WHERE anime_name = ? AND staff_name = ?";
			con.query(
				sql,
				[
					body.staff_name,
					body.staff_role,
					body.staff_image,
					event.pathParameters.anime_name,
					event.pathParameters.staff_name,
					event.pathParameters.staff_role,
				],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		//-----DELETE------

		case "DELETE /anime_info/{anime_name}":
			sql = "DELETE FROM anime_info.anime_info WHERE anime_name = ?;";
			con.query(sql, [event.pathParameters.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "DELETE /anime_info/character":
			body = JSON.parse(event.body);
			sql =
				"DELETE FROM anime_info.characters WHERE anime_name = ? AND character_name = ?;";
			con.query(
				sql,
				[body.anime_name, body.character_name],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "DELETE /anime_info/genre":
			body = JSON.parse(event.body);
			sql = "DELETE FROM anime_info.genres WHERE anime_name = ? AND genre = ?;";
			con.query(sql, [body.anime_name, body.genre], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "DELETE /anime_info/producer":
			body = JSON.parse(event.body);
			sql =
				"DELETE FROM anime_info.producers WHERE anime_name = ? AND producer = ?;";
			con.query(sql, [body.anime_name, body.producer], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "DELETE /anime_info/staff":
			body = JSON.parse(event.body);
			sql =
				"DELETE FROM anime_info.staffs WHERE anime_name = ? AND staff_name = ? AND staff_role = ?;";
			con.query(
				sql,
				[body.anime_name, body.staff_name, body.staff_role],
				function (err, result) {
					if (err) throw err;
					return callback(null, result);
				}
			);
			break;

		case "DELETE /anime_info/studio":
			body = JSON.parse(event.body);
			sql =
				"DELETE FROM anime_info.studios WHERE anime_name = ? AND studio = ?;";
			con.query(sql, [body.anime_name, body.studio], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		case "DELETE /anime_info/trailer":
			body = JSON.parse(event.body);
			sql = "DELETE FROM anime_info.trailers WHERE anime_name = ?";
			con.query(sql, [body.anime_name], function (err, result) {
				if (err) throw err;
				return callback(null, result);
			});
			break;

		default:
			throw new Error("Unsupported route: " + event.routeKey);
	}
};
