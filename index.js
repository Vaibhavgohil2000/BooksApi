const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
var bodyParser = require('body-parser')

const app = express();
app.get("/",(req,res)=>{
    res.send("adadas");
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
})
