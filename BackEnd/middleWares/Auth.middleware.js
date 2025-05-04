const userModel = require("../models/User_model");
const jwt = require("jsonwebtoken");
const blackListedToken = require("../models/blackListTokens.model");
const bcrypt = require("bcrypt");
const captainModel = require("../models/captain.model");
module.exports.authUser = async (req, res, next) => {
  console.log("authMiddleware running for:", req.originalUrl);

    try {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorised access" });
  }
  const blockedToken = await blackListedToken.findOne({ token: token });
  if (blockedToken) {
    // console.log( ` Unauthorised access not allowed,blockedtoken = ${blockedToken}` );
    return res.status(400).json({message:"Unauthorised Access"})
  }
  const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded_token._id);
  req.user = user;
  next();
  }
     catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const tokenReceived = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!tokenReceived) {
      return res.status(401).json({ message: "Unauthorised access" });
    }
    const blockedToken = await blackListedToken.findOne({token:tokenReceived});
    if (blockedToken) {
      return res
        .status(400)
        .json({ message: "Unauthorised access not allowed",blockedtoken:blockedToken });
    }
    const decoded_token = jwt.verify(tokenReceived, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded_token._id);
    req.captain = captain;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
