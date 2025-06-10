import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Home/Homepage";
import Mainlayout from "../layouts/Main/Mainlayout";
import Upcoming from "../pages/EventPages/Upcoming";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            { index: true, Component: Homepage },
            {
                path: "event/upcoming",
                Component: Upcoming,
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
