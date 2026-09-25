const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db", (err) => {
    if (err) {
        console.error("Database gagal terhubung");
    } else {
        console.log("SQLite Connected");
    }
});
// Tabel users
db.run(`
            CREATE TABLE IF NOT EXISTS users(
            
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullname TEXT NOT NULL,   
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            division TEXT NOT NULL
            )
            `);

// Tabel submissions
db.run(`
CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    screenshot TEXT,
    rating INTEGER DEFAULT 0,
    status TEXT DEFAULT 'Pending',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id) REFERENCES users(id)
)
`);

module.exports = db;