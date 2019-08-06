const express = require('express');
const router = express.Router();//mini app

//注册
router.post('/reg', (req, res) => {
    let sql = 'select * from user where 1 ';
    if (req.body.account) {
        sql += "AND account='" + req.body.account + "'";
    }
    mydb.query(sql, (err, results) => {
        if (results.length > 0) {
            res.json({
                msg: "account_already_exist"
            })
        } else {
            let newsql = `insert into user(account,passwd) values ("${req.body.account}","${req.body.passwd}")`;
            mydb.query(newsql, (err, results) => {
                if (err) {
                    console.log(err)
                    return;
                }
                res.json({
                    msg: "reg_success"
                })
            })
        }
    });
});

//登录
router.post('/login', (req, res) => {
    let sql = 'select * from user where 1 ';
    if (req.body.account) {
        sql += " AND account='" + req.body.account + "'";
    }
    mydb.query(sql, (err, results) => {
        if (results.length == 0) {
            res.json({
                msg: "account_no_exist"
            })
        }
        else if (req.body.passwd == results[0].passwd) {
            // 登录成功的标记符号
            req.session.id = results[0].id;
            req.session.account = req.body.account;
            res.json({
                msg: "login_success"
            })
        } else {
            res.json({
                msg: "false password"
            })
        }

    });
});
router.get("/getAccount", function (req, res) {
    res.json({ account: req.session.account });
});
module.exports = router;