const express = require('express');
const router = express.Router();//mini app

router.get("/getClassify", (req, res) => {
    let sql = 'SELECT * FROM showlist WHERE 1=1';
    if (req.query.city) {
        sql += ` AND address = "${req.query.city}"`;
    }
    if (req.query.type) {
        sql += ` AND type = ${req.query.type}`;
    }
    mydb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        console.log(result);
        res.json(result);
    });
})

module.exports = router;