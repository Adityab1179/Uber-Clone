const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes=require("./routes/user.routes")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const database=require("./DB/Database")
app.use(cors());
dotenv.config();
database();
app.get("/", (req, res) => {
  res.send("running succesfully")
});
app.use('/users',userRoutes)
module.exports = app;
