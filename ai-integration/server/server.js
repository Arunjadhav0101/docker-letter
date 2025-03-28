const mysql = require("mysql2");

// Create a connection
const db = mysql.createConnection({
  host: "mysql-db",  // This is the MySQL container name
  user: "root",
  password: "root",
  database: "mydatabase"
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
    return;
  }
  console.log("✅ Connected to MySQL!");
});

// Sample API route to fetch data
const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Database error");
      return;
    }
    res.json(results);
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
