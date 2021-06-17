const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    name: String,
    age: Number,
    hobbies: String,
    aboutMe: String
}, {
    timestamps: true
});

const Blogger = mongoose.model("Blogger", bloggerSchema);

module.exports = Blogger;