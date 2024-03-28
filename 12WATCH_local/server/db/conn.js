const mysql = require("mysql");

// Connection configuration
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	port: 3306,
	password: "CDEV",
	database: "12watch",
});

// Establish connection
con.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL database: " + err.stack);
		return;
	}
	console.log("Connected to MySQL database");
});

module.exports = con;
