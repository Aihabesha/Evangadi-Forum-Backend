const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "62.72.50.103",
  user: "u158031785_evangadiuser", 
  password: process.env.DB_PASSWORD,
  database: "u158031785_evangadiforum",
});

module.exports = db.promise();
