import React, { use, useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/Loader/Loader";

const Mainlayout = () => {
    const { loading } = use(AuthContext);
    const [showLoader, setShowLoader] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!loading) {
                setShowLoader(false);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [loading]);
    return (
        <div
            className="min-h-screen relative"
            style={{
                background: `var(--body-gradient)`,
            }}
        >
            <div className="bg-[var(--bg-overlay)] absolute inset-0"></div>
            {loading || showLoader || navigation.state === "loading" ? (
                <div className="z-10">
                    <Loader></Loader>
                </div>
            ) : (
                <>
                    <header className="">
                        <Navbar></Navbar>
                    </header>
                    <main className="z-10 relative pt-26 md:pt-26">
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
