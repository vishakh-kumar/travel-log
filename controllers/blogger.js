//=================================
//       DEPENDENCIES
//=================================
const router = require("express").Router();
const Blogger = require("../models/blogger");


//=================================
//            INDEX
//=================================
router.get("/", async (req, res) => {
    try {
        const bloggers = await Blogger.find({});
        res.render("blogger/index", {
            bloggers
        });
    } catch (error) {
        console.log(error);
        res.redirect("/blogger");
    }
});
//=================================
//             NEW
//=================================
router.get("/new", (req, res) => {
    res.render("blogger/new");
});
//=================================
//            DELETE
//=================================
router.delete("/:id", async (req, res) => {
    try {
        await Blogger.findByIdAndDelete(req.params.id);
        res.redirect("/blogger");
    } catch (error) {
        console.log(error);
        res.redirect("/blogger");
    }
})
//=================================
//            UPDATE
//=================================
router.put("/:id", (req, res) => {
    Blogger.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedBlogger) => {
        res.redirect(`/blogger/${req.params.id}`);
    });
});

//=================================
//            CREATE
//=================================
router.post("/", async (req, res) => {
    try {
        await Blogger.create(req.body);
        res.redirect("/blogger");
    } catch (error) {
        console.log(error);
        res.redirect("/blogger/new");
    }
});
//=================================
//             EDIT
//=================================
router.get("/:id/edit", async (req, res) => {
    try {
        const blogger = await Blogger.findById(req.params.id);
        res.render("blogger/edit", {
            blogger
        });

    } catch (error) {
        console.log(error);
        res.redirect("/blogger");
    }
});
//=================================
//             SHOW
//=================================
router.get("/:id", async (req, res) => {
    try {
        const blogger = await Blogger.findById(req.params.id);
        res.render("blogger/show", {
            blogger
        });
    } catch (error) {
        console.log(error);
        res.redirect("/blogger");
    }
});



module.exports = router;