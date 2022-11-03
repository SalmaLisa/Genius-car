import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import ServiceDetails from "../pages/Home/components/Services/ServiceDetails";
import Home from "../pages/Home/HomePage/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
      path: '/',
      element:<Home></Home>
      },
      {
      path: '/login',
      element:<Login></Login>
      },
      {
      path: '/signup',
      element:<SignUp></SignUp>
      },
      {
      path: '/services/checkout',
      element:<CheckOut></CheckOut>
      },
      {
      path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
    ]
  }
])