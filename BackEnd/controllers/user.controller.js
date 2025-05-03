const userModel = require("../models/User_model");
const userService = require("../services/user.service");
const blackListedToken=require("../models/blackListTokens.model")
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { firstName,lastName, email, password } = req.body;
  if (!firstName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await userModel.findOne({ email });
  if(existingUser){
    res.status(400).json({message:"User already exists"})
  }
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstName: firstName,
    lastName: lastName,
    email,
    password: hashedPassword,
  });
  const token = await user.generateAuthToken();
  res.status(201).json({ token, user });
};
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({ token, user });
};
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};
module.exports.logout=async(req,res,next)=>{
    
    const token=req.cookies.token||req.headers.authorization?.split(" ")[1];
    req.user=null
    await blackListedToken.create({token})
    res.clearCookie('token')
    res.status(200).json({message:"Log out Successfull"})
}
