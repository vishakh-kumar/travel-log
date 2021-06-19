//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Set up Schema
const bloggerSchema = new Schema({
    first_name: String,
    last_name:String,
    age: Number,
    hobbies: String,
    aboutMe: String
}, {
    timestamps: true
});

//Compile Schema into a model
const Blogger = mongoose.model("Blogger", bloggerSchema);

//Export model
module.exports = Blogger;