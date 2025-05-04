import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    color: "",
    plateNumber: "",
    vehicleType: "",
    capacity: "",
  });
  const handleFormData = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/captains/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="h-screen flex flex-col justify-between p-7">
      <div>
        <img
          className="w-16 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <h3 className="text-lg font-medium mb-1">Enter Your Name</h3>
          <div className="flex gap-4">
            <input
              value={formData.firstName}
              className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-3 rounded"
              type="text"
              placeholder="First Name"
              onChange={handleFormData}
              name="firstName"
              required
            />
            <input
              value={formData.lastName}
              className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-3 rounded"
              type="text"
              placeholder="Last Name"
              onChange={handleFormData}
              name="lastName"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-full">
          <h3 className="text-lg font-medium mb-1">What's your email</h3>
          <input
            value={formData.email}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="email"
            placeholder="email@example.com"
            onChange={handleFormData}
            name="email"
            required
          />
          </div>
          <div className="w-full">
          <h3 className="text-lg font-medium mb-1">Phone Number</h3>
          <input
            value={formData.number}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="text"
            placeholder="Phone Number"
            onChange={handleFormData}
            name="number"
            required
            
          />
          </div>
          </div>
          <h3 className="text-lg font-medium mb-1">Enter Your Password</h3>
          <input
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleFormData}
            value={formData.password}
            required
          />
          
          
          <h3 className="text-lg font-medium mb-1">Vehicle Info</h3>
          <div className="flex gap-4">
          <input
            value={formData.color}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="text"
            placeholder="Vehicle Color"
            onChange={handleFormData}
            name="color"
            required
          />
          <input
            value={formData.plateNumber}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="text"
            placeholder="Plate Number"
            onChange={handleFormData}
            name="plateNumber"
            required
          />
          </div>
          <div className="flex gap-4">
          <select
            value={formData.vehicleType}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded overflow-hidden"
            onChange={handleFormData}
            name="vehicleType"
            required
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>
          <input
            value={formData.capacity}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
            type="number"
            placeholder="Vehicle Capacity"
            onChange={handleFormData}
            name="capacity"
            required
          />
          </div>
          <button className="w-full text-center font-medium bg-[#111] text-white px-4 py-3 rounded mb-5">
            Register
          </button>
        </form>
        <p className="text-center">
          Already a Captain?{" "}
          <Link className="text-blue-500" to={"/captain-login"}>
            Login
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="w-full block text-center font-medium bg-[#d5622d] text-white px-4 py-3 rounded mb-4"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainRegister;
