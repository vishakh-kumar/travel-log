//=================================
//          DEPENDENCIES
//=================================
const router = require("express").Router();
const Blog = require("../models/blog");
//=================================
//              INDEX
//=================================
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.render("blogs/index", {
            blogs
        });
    } catch (error) {
        console.log(error);
        res.redirect("/blogs");
    }
});
//=================================
//              NEW
//=================================
router.get("/new",(req,res)=>{
res.render("blogs/new");
});
//=================================
//             DELETE
//=================================
router.delete("/:id", async(req,res)=>{
try{
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/blogs");
}catch(error){
    console.log(error);
    res.redirect("/blogs");
}
});
//=================================
//             UPDATE
//=================================
router.put("/:id", (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedBlog) => {
        res.redirect(`/blogs/${req.params.id}`);
    });
});
//=================================
//             CREATE
//=================================
router.post("/", async(req,res)=>{
    try{
        await Blog.create(req.body);
        res.redirect("/blogs");
    }catch(error){
        console.log(error);
        res.rederict("/blogs/new");
    }
});
//=================================
//              EDIT
//=================================
router.get("/:id/edit", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.render("blogs/edit", {
            blog
        });

    } catch (error) {
        console.log(error);
        res.redirect("/blogs/:id");
    }
});
//=================================
//              SHOW
//=================================
router.get("/:id", async(req,res)=>{
try{
    const blog = await Blog.findById(req.params.id);
    res.render("blogs/show", {
        blog
    });
}catch(error){
    console.log(error);
    res.redirect("/blogs");
}
});
//=================================
//            EXPORT
//=================================
module.exports = router;