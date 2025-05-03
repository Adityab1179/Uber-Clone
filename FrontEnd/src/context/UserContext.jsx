import React, { useState } from "react";
import { createContext } from "react";

export const UserContextData = createContext();
const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  return (
    <UserContextData.Provider value={{userData, setUserData}}>
      <div>{children}</div>
    </UserContextData.Provider>
  );
};

export default UserContext;
