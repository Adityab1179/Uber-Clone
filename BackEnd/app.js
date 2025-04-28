const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes=require("./routes/user.routes")
const captainRoutes=require("./routes/captain.routes")
const app = express();
const cookieParser=require("cookie-parser")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const database=require("./DB/Database")
app.use(cors());
app.use(cookieParser())
dotenv.config();
database();
app.get("/", (req, res) => {
  res.send("running succesfully")
});
app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
module.exports = app;
