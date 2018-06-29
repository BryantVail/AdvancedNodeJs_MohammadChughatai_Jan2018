//app.js
"use strict";
const express       = require("express");
const app           = express();

const mongodb       = require("mongodb");
const mongoose      = require("mongoose");
const keys          = require("./config/keys");
let   port          = process.env.PORT || 3000;

//models
const User          = require("./Models/user.model.js");

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

//db connect
mongoose.connect(keys.mlab.mongodbURI, (error) =>{
    if(!error){
        console.log(
            "MongoDB connected"
        );
    }else{
        console.log(error);
    }
});









