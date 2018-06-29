//app.js
"use strict";
const express       = require("express");
const app           = express();

const mongodb       = require("mongodb");
const mongoose      = require("mongoose");
const keys          = require("./config/keys");
let   port          = process.env.PORT || 5000;

//models
const User          = require("./Models/users.model.js");

//routes
const userRoutes    = require("./Controller/userRoutes");
app.use("/users",userRoutes);//directory "/users" redirect to userRoutes to handle

//db connect
mongoose.connect(keys.mlab.mongodbURI, function(){
    console.log("mongodb connected");
});
// mongoose.connect(keys.mlab.mongodbURI)
//     .then(function(){
//         console.log(`${res}, db connected`);
//     }).catch((err)=>{
//         console.log(err);
//     });
    

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







