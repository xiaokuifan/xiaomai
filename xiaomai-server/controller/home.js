const express = require('express');
const router = express.Router();//mini app

router.get("/getposters", (req, res) => {
    let sql = 'SELECT * FROM showlist';
    mydb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ r: 'err' });
            return;
        }
        res.json(result);
    });
})

module.exports = router;