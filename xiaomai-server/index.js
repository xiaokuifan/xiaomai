const express = require('express');
const mysql = require('mysql');
const app = express();
app.use("/images",express.static("images"));
app.listen(8081,()=>{
    console.log("success")
})