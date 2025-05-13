const captainModel = require("../models/captain.model");
const createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  number,
  plateNumber,
  vehicleType,
  capacity,
}) => {
 
  if (!firstName|| !email || !password|| !color || !number || !plateNumber || !vehicleType || !capacity) {
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
      color:color,
      capacity:capacity,
      plateNumber:plateNumber,
      vehicleType:vehicleType,
    },
  });
return captain;
};
module.exports =  {createCaptain} ;
