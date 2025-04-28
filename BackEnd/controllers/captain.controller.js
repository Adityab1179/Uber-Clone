const CaptainModel = require("../models/captain.model");
const {createCaptain} = require("../services/captain.service");
const registerCaptain = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    color,
    number,
    plateNumber,
    type,
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
      !type ||
      !capacity
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingCaptain = await CaptainModel.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({
        success: false,
        message: "Captain already exists",
      });
    }
    const hashedPassword = await CaptainModel.hashPassword(password);
    const captain = await createCaptain({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      number,
      color,
      capacity,
      plateNumber,
      type,
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
module.exports = {registerCaptain};
