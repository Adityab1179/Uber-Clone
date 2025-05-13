import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContextData } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captainData, setCaptainData } = useContext(CaptainContextData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/captain-login");
    }
  }, [navigate]);
  axios
    .get(`${import.meta.env.VITE_base_Url}/captains/profile`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,

      },
    })
    .then((response) => {
      if(response.status !== 200) {
        navigate("/captain-login");
      }
      setCaptainData(response.data.captain);
      setIsLoading(false);
    })
    .catch((error) => {
      localStorage.removeItem("token");
      console.log(error);
      navigate("/captain-login");
    });
  if (isLoading) {
    return <>Loading Data....</>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
