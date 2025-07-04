import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ToastContainer></ToastContainer>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>
);
