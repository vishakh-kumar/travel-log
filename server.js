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

//  CONFIG MONGOOSE
const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
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
app.use(methodOverride("_method"));
app.use(logger("dev"));

//=================================
//          HOME ROUTE
//=================================
app.get("/",(req,res)=> res.render("index.ejs"));
//=================================
//       Express Listener
//=================================
app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT ${PORT}`);
})





















