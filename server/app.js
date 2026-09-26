const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const db = require("./db");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); //Fungsinya membaca data JSON dari frontend.
//Tanpa middleware ini, backend tidak bisa membacanya.
app.use("/uploads", express.static("uploads"));

// ==========================
// MULTER CONFIG
// ==========================

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() + path.extname(file.originalname);

        cb(null, uniqueName);
    }

});

const upload = multer({ storage });

//Test Route
app.get("/", (req, res) => {
    res.send("RPKL Backend running");
});

//register
app.post("/register", (req, res) => {

    const { fullname, username, password, division } = req.body;

    const sql = `
        INSERT INTO users (fullname, username, password, division)
        VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [fullname, username, password, division], function (err) {

        if (err) {
            return res.status(400).json({
                message: "Username sudah digunakan"
            });
        }

        res.json({
            message: "Register berhasil",
            userId: this.lastID
        });

    });

});

//Login
app.post("/login", (req, res) => {

    //Ambil username & password
    const { username, password } = req.body;

    //Artinya SQLite mencari 1 user yang cocok
    const sql = `
        SELECT * FROM users
        WHERE username = ? AND password = ?
    `;

    db.get(sql, [username, password], (err, user) => {

        if (err) {
            return res.status(500).json({
                message: "Server error"
            });
        }

        if (!user) {
            return res.status(401).json({
                message: "Username atau Password salah"
            });
        }

        res.json({
            message: "Login berhasil",
            user: user
        });
    });
});

// SUBMIT PROGRESS
app.post("/submit", upload.single("screenshot"), (req, res) => {

    const { user_id, title, description } = req.body;

    const screenshot = req.file
        ? req.file.filename
        : null;

    const sql = `
        INSERT INTO submissions
        (user_id, title, description, screenshot)
        VALUES (?, ?, ?, ?)
    `;

    db.run(
        sql,
        [user_id, title, description, screenshot],
        function(err){

            if(err){
                return res.status(500).json({
                    message:"Submit gagal"
                });
            }

            res.json({
                message:"Project berhasil dikirim"
            });

        }
    );

});

//Ambil Semua Submission
app.get("/submissions", (req, res) => {

    const sql = `SELECT
            submissions.*,
            users.fullname,
            users.division
        FROM submissions
        JOIN users
        ON submissions.user_id = users.id
        ORDER BY submissions.created_at DESC`;

    db.all(sql, [], (err, rows) => {
         if (err) {
            return res.status(500).json({
                message: "Gagal mengambil data"
            });
        }

        res.json(rows);
    });
})

app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`);
});