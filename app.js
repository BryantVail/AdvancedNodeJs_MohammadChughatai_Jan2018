//app.js
"use strict";
const express       = require("express");
const app           = express();

const mongodb       = require("mongodb");
const mongoose      = require("mongoose");
const keys          = require("./config/keys");
let   port          = process.env.PORT || 5000;

//modelsf
const User          = require("./Models/users.model.js");



//db connect
mongoose.connect(keys.mlab.mongodbURI, function(res){
    console.log(`${res}, db connected`);
});

//app start
app.listen(port, (error) =>{
    if(!error){
        console.log(
            `listenting on port: ${port}`
        );
    }else{
        console.log(error);
    }
});







