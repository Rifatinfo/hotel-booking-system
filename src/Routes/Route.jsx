import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import LoginForm from "../Pages/signIn/LoginForm";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/sign-in",
          element:<LoginForm/>,
        },
      ],
    },
  ]);
  export default router