//users.model.js
const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type        :String,
        required    :true
    },
    password:{
        type        :String,
        required    :true
    },
    isOver21:{
        type    :Boolean,
        required    :false
    }
});




//mongoose.model(modelName, schema)
module.exports = mongoose.model("User",UserSchema);


