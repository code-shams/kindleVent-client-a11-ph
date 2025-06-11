import React from "react";
import e12 from "../../assets/e12.png";
import e13 from "../../assets/e13.png";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
const DefaultError = () => {
    return (
        <div
            className="min-h-screen flex flex-col gap-3 justify-center items-center"
            style={{
                backgroundImage: `url(${e12})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <title>Error</title>
            <div>
                <img src={e13} alt="" />
            </div>
            <h1 className="text-5xl font-bold sec-font text-center w-11/12">
                Oh No! Error 404
            </h1>
            <p className="text-base pri-font font-medium text-center w-11/12">
                We searched everywhere but couldn’t find what you’re looking
                for. Let’s find a better place for you to go.
            </p>
            <div>
                <Link className="cursor-pointer transition duration-300 bg-primary py-2 px-4 rounded-lg font-medium hover:bg-accent flex items-center gap-2 pri-font">
                    <FaHome></FaHome>
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default DefaultError;
