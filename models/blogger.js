const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    first_name: String,
    last_name:String,
    age: Number,
    hobbies: String,
    aboutMe: String
}, {
    timestamps: true
});

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;