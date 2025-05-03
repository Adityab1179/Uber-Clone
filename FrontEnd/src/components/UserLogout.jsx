import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();
  useEffect(() => {
    
    const logout = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_base_Url}/users/logout`,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    logout();
  }, []);
  return <div>UserLogout</div>;
};

export default UserLogout;
