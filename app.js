//app.js
const express       = require("express");
const app           = express();

const mongodb       = require("mongodb");
const mongoose      = require("mongoose");
let   port          = process.env.PORT || 3000;

app.listen(port, (error) =>{
    if(!error){
        console.log(
            `listenting on port: ${port}`
        );
    }else{
        console.log(error);
    }
});










