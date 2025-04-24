const userModel = require("../models/User_model");
module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }
  const user = await userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  return user;
};