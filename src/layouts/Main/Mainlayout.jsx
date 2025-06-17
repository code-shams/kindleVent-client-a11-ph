import React, { use, useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/Loader/Loader";

const Mainlayout = () => {
    const { loading } = use(AuthContext);

    const navigation = useNavigation();

    return (
        <div
            className="min-h-screen relative"
            style={{
                background: `var(--body-gradient)`,
            }}
        >
            <div className="bg-[var(--bg-overlay)] absolute inset-0"></div>
            {loading || navigation.state === "loading" ? (
                <div className="z-10">
                    <Loader></Loader>
                </div>
            ) : (
                <>
                    <header className="">
                        <Navbar></Navbar>
                    </header>
                    <main className="z-10 relative pt-22 md:pt-26 min-h-[calc(100vh-420px)]">
                        <Outlet></Outlet>
                    </main>
                    <footer className="z-10 relative">
                        <Footer></Footer>
                    </footer>
                </>
            )}
        </div>
    );
};

export default Mainlayout;
