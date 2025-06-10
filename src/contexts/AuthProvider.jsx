import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const value = { user: "shams" };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
