import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home"; // corrected path
import UserLogin from "./components/UserLogin";
import CaptainLogin from "./components/CaptainLogin";
import CaptainRegister from "./components/CaptainRegister";
import UserRegistser from "./components/UserRegistser";

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
        element: <Home />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
