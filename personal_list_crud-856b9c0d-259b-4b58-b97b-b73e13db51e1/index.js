const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  let body;
  let response;

  switch (event.routeKey) {
    case "POST /list":
      body = JSON.parse(event.body);

      var params = {
        TableName: "personal-list",
        FilterExpression: "username = :username AND list_name = :list_name",
        ExpressionAttributeValues: {
          ":username": body.username,
          ":list_name": body.list_name,
        },
      };

      dynamo.scan(params, function (err, result) {
        if (err) throw err;
        return callback(null, result);
      });
      break;

    case "POST /list/add":
      body = JSON.parse(event.body);

      var params = {
        TableName: "user-info",
        KeyConditionExpression: "username = :username",
        ExpressionAttributeValues: {
          ":username": body.username,
        },
      };

      dynamo.query(params, function (err, result) {
        if (result.Count == 0)
          return callback(null, { message: "user not found!" }); 

        if (err) throw err;

        var params = {
          TableName: "personal-list",
          Item: body,
        };

        dynamo.put(params, function (err, result) {
          if (err) throw err;
          return callback(null, { message: "anime added to list!" });
        });
      });
      break;

    case "PUT /list":
      body = JSON.parse(event.body);

    case "PUT /list":
      body = JSON.parse(event.body);

      var params = {
        TableName: "personal-list",
        Key: {
          username: body.username,
          anime_name: body.anime_name,
        },
        UpdateExpression: "set list_name = :list_name",
        ExpressionAttributeValues: {
          ":list_name": body.list_name,
        },
        ReturnValues: "UPDATED_NEW", // Return the updated attribute values
      };

      dynamo.update(params, function (err, result) {
        if (err) throw err;

        return callback(null, result.Attributes);
      });
      break;

    case "DELETE /list":
      body = JSON.parse(event.body);

      var params = {
        TableName: "personal-list",
        Key: {
          username: body.username,
          anime_name: body.anime_name,
        },
      };

      dynamo.delete(params, function (err, result) {
        if (err) throw err;
        return callback(null, { message: "anime deleted!" });
      });
      break;

    default:
      throw new Error("Unsupported route: " + event.routeKey);
  }
};
