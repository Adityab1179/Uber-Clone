import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingScreen from "./components/LandingScreen"; // corrected path
import UserLogin from "./components/UserLogin";
import CaptainLogin from "./components/CaptainLogin";
import CaptainRegister from "./components/CaptainRegister";
import UserRegistser from "./components/UserRegistser";
import UserHome from "./components/UserHome";
import UserProtectedWrapper from "./components/userProtectedWrapper";
import UserLogout from "./components/UserLogout";
import CaptainHome from "./components/CaptainHome";
import CaptainProtectedWrapper from "./components/CaptainProtectedWrapper";
import Riding from "./components/Riding";
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
            <UserHome />
          </UserProtectedWrapper>
        ),
      },
      {
        path:"/riding",
        element:(
          <UserProtectedWrapper>
            <Riding/>
          </UserProtectedWrapper>
        )

      },
      {
        path:"/logout",
        element:(<UserLogout/>)
      },{
        path:"/captain-home",
        element:<CaptainProtectedWrapper>
        <CaptainHome/>
        </CaptainProtectedWrapper>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
