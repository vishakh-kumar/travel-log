//=================================
//       DEPENDENCIES
//=================================
const router = require("express").Router();
const Blogger = require("../models/blogger");

//=================================
//            INDEX
//=================================
router.get("/", async (req, res) => {
    try{
        const bloggers = await Blogger.find({});
        res.render("blogger/index",{bloggers});
    }catch(error){
        console.log(error);
        res.redirect("/blogger");
    }
});
//=================================
//             NEW
//=================================
router.get("/new",(req,res)=>{
res.render("blogger/new");
});
//=================================
//            DELETE
//=================================
router.delete("/:id", async (req,res)=>{
    try{
        await Blogger.findByIdAndDelete(req.params.id);
        res.redirect("/blogger");
    }catch(error){
        console.log(error);
        res.redirect("/blogger");
    }
})
//=================================
//            EDIT
//=================================

//=================================
//            CREATE
//=================================
router.post("/", async (req,res)=>{
try{
    await Blogger.create(req.body);
    res.redirect("/blogger");
}catch(error){
    console.log(error);
    res.redirect("/blogger/new");
}
});
//=================================
//             EDIT
//=================================

//=================================
//             SHOW
//=================================

module.exports = router;