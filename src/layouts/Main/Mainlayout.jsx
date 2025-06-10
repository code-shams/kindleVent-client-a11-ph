import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Mainlayout = () => {
    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: `var(--body-gradient)`,
            }}
        >
            <div className="bg-[var(--bg-overlay)] absolute inset-0 z-0"></div>
            <header className="">
                <Navbar></Navbar>
            </header>
            <main className="z-10 relative pt-22">
                <Outlet></Outlet>
            </main>
            <footer className="z-10 relative">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;
