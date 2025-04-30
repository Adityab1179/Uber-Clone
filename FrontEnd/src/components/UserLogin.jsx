import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormData = (e) => {
    setFormData((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:4000/users/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    const data=await response.json()
    console.log(data)
  }
  return (
    <div className="h-screen flex flex-col justify-between p-7">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form onSubmit={(e)=>{
          handleFormSubmit(e)
        }}>
          <h3 className="text-xl font-medium mb-3">What's your email</h3>
          <input
            value={formData.email}
            className="w-full placeholder:text-lg bg-[#eeeeee] py-3 px-3 mb-5 rounded"
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
          New to uber?{" "}
          <Link className="text-blue-500" to={"/signup"}>
            Create Your Account
          </Link>
        </p>
      </div>
      <div>
        <Link to={"/captain-login"}className="w-full  block text-center font-medium bg-[#10b461] text-white px-4 py-3 rounded mb-4">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
