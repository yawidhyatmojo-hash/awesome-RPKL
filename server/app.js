const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); //Fungsinya membaca data JSON dari frontend.
//Tanpa middleware ini, backend tidak bisa membacanya.

//Test Route
app.get("/", (req, res) => {
    res.send("RPKL Backend running");
});

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

app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`);
});