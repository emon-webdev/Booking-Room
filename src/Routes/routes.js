import { createBrowserRouter } from "react-router-dom";
import AllBookings from "../Components/Dashboard/AllBookings";
import AllUsers from "../Components/Dashboard/AllUsers";
import BecomeAHost from "../Components/Dashboard/BecomeAHost";
import MyBookings from "../Components/Dashboard/MyBookings";
import Welcome from "../Components/Dashboard/Welcome";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddHome from "../Pages/AddHome";
import Checkout from "../Pages/Checkout";
import Details from "../Pages/Details";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import SearchResult from "../Pages/SearchResult";
import ComingSoon from "../Pages/Shared/ComingSoon";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/service-details",
        element: <Details />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/become-host",
        element: (
          <PrivateRoute>
            <BecomeAHost />
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "add-home",
        element: (
          <PrivateRoute>
            <AddHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-bookings",
        element: (
          <PrivateRoute>
            <AllBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
