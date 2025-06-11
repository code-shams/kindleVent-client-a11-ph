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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        errorElement: <DefaultError></DefaultError>,
        children: [
            { index: true, Component: Homepage },
            {
                path: "event/upcoming",
                Component: Upcoming,
            },
            {
                path: "event/join",
                Component: JoinEvent,
            },
            {
                path: "event/create",
                Component: CreateEvent,
            },
            {
                path: "event/manage",
                Component: ManageEvent,
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
