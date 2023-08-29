const AWS = require("aws-sdk");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dynamo = new AWS.DynamoDB.DocumentClient();

const secretKey = "#######";

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

exports.handler = (event, context, callback) => {
	let body;
	let response;

	const eventData = JSON.parse(event.body); // Parse the event body to access the token
	const token = eventData.token; // Retrieve the token from the parsed event body

	switch (event.routeKey) {
		case "POST /user/login":
			body = JSON.parse(event.body);

			var params = {
				TableName: "user-info",
				KeyConditionExpression: "username = :username",
				ExpressionAttributeValues: {
					":username": body.username,
				},
			};

			dynamo.query(params, function (err, result) {
				if (err) throw err;

				if (result.Count === 0) {
					return callback(null, { message: "User not found" });
				}

				const storedPassword = result.Items[0].password;
				const hashedPassword = hashPassword(body.password);

				if (storedPassword !== hashedPassword) {
					return callback(null, { message: "Invalid password" });
				}

				const token = generateToken(body.username);
				const username = result.Items[0].username;
				const email = result.Items[0].email;
				const backgroundImg = result.Items[0].backgroundImg;
				const profilePic = result.Items[0].profilePic;

				return callback(null, {
					message: "Login successful",
					token: token,
					username: username,
					email: email,
					backgroundImg: backgroundImg,
					profilePic: profilePic,
				});
			});
			break;

		case "POST /user/register":
			body = JSON.parse(event.body);

			var params = {
				TableName: "user-info",
				KeyConditionExpression: "username = :username",
				ExpressionAttributeValues: {
					":username": body.username,
				},
			};

			dynamo.query(params, function (err, result) {
				if (result.Count == 1)
					return callback(null, { message: "username already in use!" });

				if (err) throw err;

				// Hash the password before storing it
				const hashedPassword = hashPassword(body.password);
				body.password = hashedPassword;

				var params = {
					TableName: "user-info",
					Item: body,
				};

				dynamo.put(params, function (err, result) {
					if (err) throw err;
					return callback(null, { message: "user registered" });
				});
			});
			break;

		case "PUT /user/update":
			body = JSON.parse(event.body);

			// Verify the token
			try {
				const decodedToken = jwt.verify(token, secretKey);
				const username = decodedToken.username;

				// Proceed with the update logic
				var params = {
					TableName: "user-info",
					Key: { username: username },
					UpdateExpression: "SET", // Use SET keyword to dynamically set attributes
					ExpressionAttributeValues: {},
					ReturnValues: "UPDATED_NEW", // Return the updated attribute values
				};

				// Check if email is provided in the body
				if (body.email) {
					params.UpdateExpression += " email = :email,"; // Add email attribute to the update expression
					params.ExpressionAttributeValues[":email"] = body.email; // Add email attribute value
				}

				// Check if password is provided in the body
				if (body.password) {
					params.UpdateExpression += " password = :password,"; // Add password attribute to the update expression
					params.ExpressionAttributeValues[":password"] = hashPassword(
						body.password
					); // Add hashed password attribute value
				}

				// Check if backgroundImg is provided in the body
				if (body.backgroundImg) {
					const backgroundImgBuffer = Buffer.from(body.backgroundImg, "base64");
					params.UpdateExpression += " backgroundImg = :backgroundImg,"; // Add backgroundImg attribute to the update expression
					params.ExpressionAttributeValues[":backgroundImg"] =
						backgroundImgBuffer; // Add backgroundImg attribute value as binary data
				}

				// Check if profilePic is provided in the body
				if (body.profilePic) {
					const profilePicBuffer = Buffer.from(body.profilePic, "base64");
					params.UpdateExpression += " profilePic = :profilePic,"; // Add profilePic attribute to the update expression
					params.ExpressionAttributeValues[":profilePic"] = profilePicBuffer; // Add profilePic attribute value as binary data
				}

				// Remove the trailing comma in the UpdateExpression
				params.UpdateExpression = params.UpdateExpression.slice(0, -1);

				dynamo.update(params, function (err, result) {
					if (err) throw err;

					return callback(null, { message: "user edited", result });
				});
			} catch (error) {
				return callback(null, { message: "Invalid token" });
			}

			break;

		case "DELETE /user/delete":
			body = JSON.parse(event.body);

			// Verify the token
			try {
				const decodedToken = jwt.verify(token, secretKey);
				const username = decodedToken.username;

				// Proceed with the delete logic
				var params = {
					TableName: "user-info",
					Key: { username: username },
				};

				dynamo.delete(params, function (err, result) {
					if (err) throw err;
					return callback(null, { message: "User deleted" });
				});
			} catch (error) {
				return callback(null, { message: "Invalid token" });
			}

			break;

		default:
			throw new Error("Unsupported route: " + event.routeKey);
	}
};
