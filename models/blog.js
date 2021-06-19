//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up Schema
const blogSchema = new Schema({
    title: String,
    blog_img: String,
    blog_desc: String
}, {
    timestamps: true
});

//Compile Schema into a model
const Blog = mongoose.model("Blog", blogSchema);

//Export model
module.exports = Blog;