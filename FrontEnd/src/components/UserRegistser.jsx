import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserRegistser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleFormData = (e) => {
    setFormData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    const response = await fetch("http://localhost:4000/users/signUp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
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
          <h3 className="text-xl font-medium mb-3">Enter Your Name</h3>
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
          <h3 className="text-xl font-medium mb-3">What's your email</h3>
          <input
            value={formData.email}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-3 rounded"
            type="email"
            placeholder="email@example.com"
            onChange={handleFormData}
            name="email"
            required
          />
          <h3 className="text-xl font-medium mb-3">Enter Your Password</h3>
          <input
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-7 rounded"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleFormData}
            value={formData.password}
            required
          />

          <button className="w-full text-center font-medium bg-[#111] text-white px-4 py-3 rounded mb-5">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span></p>
        </div>
    </div>
  );
}

export default UserRegistser;
