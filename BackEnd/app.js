const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("running succesfully")
});
module.exports = app;
