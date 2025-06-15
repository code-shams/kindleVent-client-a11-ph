import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Home/Homepage";
import Mainlayout from "../layouts/Main/Mainlayout";
import Upcoming from "../pages/EventPages/Upcoming";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import JoinEvent from "../pages/EventPages/JoinEvent";
import CreateEvent from "../pages/EventPages/CreateEvent";
import ManageEvent from "../pages/EventPages/ManageEvent";
import DefaultError from "../pages/Error/DefaultError";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader/Loader";
import EventDetails from "../pages/EventPages/EventDetails";

const serverURL = import.meta.env.VITE_SERVER_URL;
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        errorElement: <DefaultError></DefaultError>,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "event/upcoming",
                hydrateFallbackElement: <Loader></Loader>,
                loader: () => fetch(`${serverURL}/events/upcoming`),
                Component: Upcoming,
            },
            {
                path: "event/join",
                element: (
                    <PrivateRoute>
                        <JoinEvent></JoinEvent>
                    </PrivateRoute>
                ),
            },
            {
                path: "event/create",
                element: (
                    <PrivateRoute>
                        <CreateEvent></CreateEvent>
                    </PrivateRoute>
                ),
            },
            {
                path: "event/manage",
                element: (
                    <PrivateRoute>
                        <ManageEvent></ManageEvent>
                    </PrivateRoute>
                ),
            },
            {
                path: "event/details/:id",
                element: (
                    <PrivateRoute>
                        <EventDetails></EventDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/sign-in",
                Component: SignIn,
            },
            {
                path: "/sign-up",
                Component: SignUp,
            },
        ],
    },
]);
