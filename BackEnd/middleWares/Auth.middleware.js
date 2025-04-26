const userModel = require("../models/User_model");
const jwt = require("jsonwebtoken");
const blackListedToken=require("../models/blackListTokens.model")
const bcrypt = require("bcrypt");
module.exports.authUser = async (req, res, next) => {
//   try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorised access" });
    }
    const blockedToken=await blackListedToken.findOne({token:token})
    if(blockedToken){
      res.status(400).json({message:"Unauthorised access not allowed"})
    }
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded_token._id);
    req.user = user;
    next();
  //}
//    catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
};
