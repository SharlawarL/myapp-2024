const mysql = require("mysql2");

const db = mysql.createConnection({
    "host": "localhost",
    "user" : "root",
    "password" : "Lalit@12345",
    "database": "myapp"
})

db.connect((err) =>{
    console.log("Connected to mysql");
})

module.exports = db;

