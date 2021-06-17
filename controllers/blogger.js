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
        res.redirect("/");
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

//=================================
//            EDIT
//=================================

//=================================
//            CREATE
//=================================

//=================================
//             EDIT
//=================================

//=================================
//             SHOW
//=================================

module.exports = router;