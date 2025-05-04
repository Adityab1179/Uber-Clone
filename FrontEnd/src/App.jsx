import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingScreen from "./components/LandingScreen"; // corrected path
import UserLogin from "./components/UserLogin";
import CaptainLogin from "./components/CaptainLogin";
import CaptainRegister from "./components/CaptainRegister";
import UserRegistser from "./components/UserRegistser";
import Home from "./components/Home";
import UserProtectedWrapper from "./components/userProtectedWrapper";
import UserLogout from "./components/UserLogout";
function AppLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingScreen />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/captain-login",
        element: <CaptainLogin />,
      },
      {
        path: "/captain-signup",
        element: <CaptainRegister />,
      },
      {
        path: "/signUp",
        element: <UserRegistser />,
      },
      {
        path: "/home",
        element: (
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        ),
      },
      {
        path:"/logout",
        element:(<UserLogout/>)
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
