import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/NavBar"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },

    ],
  },
]);

export default router