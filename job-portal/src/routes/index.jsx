// import { createBrowserRouter } from "react-router-dom"
// import Navbar from "../compo/Navbar"
// import ErrorPage from "../View/ErrorPage"
// import HomePage from "../View/HomePage"


// const route = createBrowserRouter([
//    {
//     element: <Navbar />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
// ])

// export default route

import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/NavBar"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import ProfilePage from "../pages/ProfilePage";
import DetailJobsPage from "../pages/DetailJobsPage";


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
      {
        path: "/detail-jobs/:id",
        element: <DetailJobsPage/>,
      },

    ],
  },
]);

export default router