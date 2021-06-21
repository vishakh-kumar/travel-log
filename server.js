require("dotenv").config();
//=================================
//          DEPENDENCIES
//=================================
const express = require("express");
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const logger = require("morgan");

//  Initialzie EXPRESS
const app = express();

//Set default view engine
app.set("view engine","ejs");
//  CONFIG MONGOOSE
const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
   useCreateIndex: true,
   useFindAndModify: false 
});

db.on("connected", ()=> console.log("mongo connected"));
db.on("error", (err) => console.log(err.message, "is mongo connected"));
db.on("disconnected", ()=> console.log("mongo disconnected"));

//=================================
//       MOUNT MIDDLEWARE
//=================================
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(logger("dev"));

//=================================
//          HOME ROUTE
//=================================
app.get("/",(req,res)=> {
    
    res.render("index.ejs", {
 
    });
});

//=================================
// Mount Controller Middlware
//=================================
app.use('/blogger', require('./controllers/blogger'));
app.use('/blogs', require('./controllers/blog'));

//=================================
//       Express Listener
//=================================
app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT ${PORT}`);
});