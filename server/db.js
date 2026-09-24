const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db", (err) => {
    if (err) {
        console.error("Database gagal terhubung");
    } else {
        console.log("SQLite Connected");

        db.run(`
            CREATE TABLE IF NOT EXISTS users(
            
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullname TEXT NOT NULL,   
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            division TEXT NOT NULL
            )
            `);
    }
});

module.exports = db;