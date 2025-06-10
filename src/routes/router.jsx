import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Home/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Homepage,
    },
]);
