const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const PORT = 3001;

// SQLite 데이터베이스 연결
const db = new sqlite3.Database('C:\Users\User\Downloads\GlobalAirportDatabase_SQLiteDB');

app.get('/api/airports/:country', (req, res) => {
    db.all("SELECT * FROM airports WHERE country = ?", [req.params.country], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
