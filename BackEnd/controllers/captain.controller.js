const captainModel = require("../models/captain.model");
const userModel=require('../models/User_model')
const {createCaptain} = require("../services/captain.service");
const {validationResult} = require("express-validator");
const blackListedToken=require("../models/blackListTokens.model")
const registerCaptain = async (req, res, next) => {
  const error=validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors:error.array(),
    });
  }
  const {
    firstName,
    lastName,
    email,
    password,
    color,
    number,
    plateNumber,
    vehicleType,
    capacity,
  } = req.body;
  try {
    if (
      !firstName ||
      !email ||
      !password ||
      !color ||
      !number ||
      !plateNumber ||
      !vehicleType ||
      !capacity
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser=await userModel.findOne({email})
    if(existingUser){
      return res.status(400).json({
        message:"Already Registred as User"
      })
    }
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({
        success: false,
        message: "Captain already exists",
      });
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      number,
      color,
      capacity,
      plateNumber,
      vehicleType,
    });
    const token = await captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(201).json({token, captain});
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const loginCaptain=async(req,res,next)=>{
  const {email,password}=req.body
  if(!email||!password){
    res.status(400).json({
      message:"All fields are required"
    })
  }
  const captain=await captainModel.findOne({email:email}).select('+password')
  if(!captain){
    res.status(200).json({
      message:"Captain not exist,Kindly register first"
    })
  }
  const isMatched=await captain.comparePassword(password)
  if(!isMatched){
    res.status(401).json({
      message:"Unauthorized Access"
    })
  }
  const token= await captain.generateAuthToken();
  res.cookie('token',token)
  res.status(200).json({
    token,captain
  })
}

const getCaptainProfile=async(req,res,next)=>{
  const captainId=req.captain
  const captain=await captainModel.findById(captainId)
  if(!captain){
    return res.status(400).json({
      message:"Captain Not Found"
    })
  }
  res.status(200).json({captain})

}

const logoutCaptain=async(req,res,next)=>{
  const token=req.cookies.token||req.headers.authorization.split(" ")[1];
  if(!token){
    return res.status(400).json({message:"Token does not exist"})
  }
  const blocked=await blackListedToken.create({token:token})
  req.captain=null,
  res.clearCookie('token')
  res.status(200).json({message:"Logout Succesfull",captain:req.captain})
}


module.exports = {registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain};
