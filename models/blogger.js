const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    name: String,
    age: Number,
    hobbies: String,
    about_me: String},
    {timestamps: true}
);

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;
