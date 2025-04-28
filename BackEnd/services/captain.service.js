const captainModel = require("../models/captain.model");
const createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  number,
  plateNumber,
  type,
  capacity,
}) => {
  if (!firstName|| !email || !password|| !color || !number || !plateNumber || !type || !capacity) {
    console.log("error")
  }
  const captain = await captainModel.create({
    fullName: {
      firstName: firstName,
      lastName: lastName,
    },
    email,
    password,
    number,
    status: "inactive",
    vehicle: {
      color,
      capacity,
      plateNumber,
      type,
      number,
    },
  });
return captain;
};
module.exports =  {createCaptain} ;
