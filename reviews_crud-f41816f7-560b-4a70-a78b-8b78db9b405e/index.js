const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  let body;
  let response;

  switch (event.routeKey) {
    case "GET /review/{anime_name}":
      var params = {
        TableName: "reviews",
        KeyConditionExpression: "anime_name = :anime_name",
        ExpressionAttributeValues: {
          ":anime_name": event.pathParameters.anime_name,
        },
      };

      dynamo.query(params, function (err, result) {
        if (err) throw err;
        return callback(null, result);
      });
      break;

    case "GET /review/{anime_name}/{username}":
      var params = {
        TableName: "reviews",
        KeyConditionExpression:
          "anime_name = :anime_name AND username = :username",
        ExpressionAttributeValues: {
          ":anime_name": event.pathParameters.anime_name,
          ":username": event.pathParameters.username,
        },
      };

      dynamo.query(params, function (err, result) {
        if (err) throw err;
        return callback(null, result);
      });
      break;

    case "POST /review/{anime_name}/{username}":
      body = JSON.parse(event.body);

      var params = {
        TableName: "reviews",
        KeyConditionExpression:
          "anime_name = :anime_name AND username = :username",
        ExpressionAttributeValues: {
          ":anime_name": event.pathParameters.anime_name,
          ":username": event.pathParameters.username,
        },
      };

      dynamo.query(params, function (err, result) {
        if (result.Count == 1)
          return callback(null, { message: "you already writen a review" });

        if (err) throw err;

        var params = {
          TableName: "reviews",
          Item: body,
        };

        dynamo.put(params, function (err, result) {
          if (err) throw err;
          return callback(null, { message: "review written" });
        });
      });
      break;

    case "PUT /review/{anime_name}/{username}":
      body = JSON.parse(event.body);

      var params = {
        TableName: "reviews",
        Key: {
          anime_name: event.pathParameters.anime_name,
          username: event.pathParameters.username,
        },
        UpdateExpression:
          "SET content = :content, #dt = :date, recommend = :recommend, spoiler = :spoiler, star_rating = :star_rating, upvote = :upvote",
        ExpressionAttributeValues: {
          ":content": body.content,
          ":date": body.date,
          ":recommend": body.recommend,
          ":spoiler": body.spoiler,
          ":star_rating": body.star_rating,
          ":upvote": body.upvote,
        },
        ExpressionAttributeNames: {
          "#dt": "date", // 'date' is a reserved word in DynamoDB, so use ExpressionAttributeNames to specify a placeholder
        },
        ConditionExpression:
          "attribute_exists(anime_name) AND attribute_exists(username)", // Add a condition to check if the item exists
        ReturnValues: "UPDATED_NEW", // Return the updated attribute values
      };

      dynamo.update(params, function (err, data) {
        if (err) throw err;

        return callback(null, data, { message: "review edited" });
      });
      break;

    case "DELETE /review":
      body = JSON.parse(event.body);

      var params = {
        TableName: "reviews",
        Key: {
          anime_name: body.anime_name,
          username: body.username,
        },
      };

      dynamo.delete(params, function (err, result) {
        if (err) throw err;
        return callback(null, { message: "review delete" });
      });
      break;

    default:
      throw new Error("Unsupported route: " + event.routeKey);
  }
};
