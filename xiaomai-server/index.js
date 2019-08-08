const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

global.mydb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "xiaomai"
});
mydb.connect();
const app = express();
//启用bodyParser post请求需要
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//解决跨域问题
app.use(function (req, res, next) {
    // 可以接受跨域的客户端传递过来的cookie
    //axios express设置跨域允许传递cookie
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    // 支持cookie 必须指定具体的域名 
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
// cookie和session
let secret = 'H5190304';
app.use(cookieParser());
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 3600000 }
}))
//启用子路由 必须使用 use 启用中间件
app.use('/user', require('./controller/user'))
app.use('/home', require('./controller/home'))
app.use('/about', require('./controller/about'))
app.use('/page', require('./controller/page'))
//静态资源托管
app.use("/images", express.static("images"));






app.listen(8081, () => {
    console.log("success")
})