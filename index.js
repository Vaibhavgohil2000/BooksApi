const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
var bodyParser = require('body-parser')
mongoose.connect("mongodb+srv://vaibhav:Vaibhav@2000@cluster0.j4iza.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started..!!");
        })
    }
);