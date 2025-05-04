import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${import.meta.env.VITE_base_Url}/users/logout`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          const errorData = await response.json();
          console.error("Logout failed:", errorData.message);
        }
      } catch (error) {
        console.error("Logout error:", error.message);
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging you out...</div>;
};

export default UserLogout;
