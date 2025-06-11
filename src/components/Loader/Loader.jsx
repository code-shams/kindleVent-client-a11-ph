import React from "react";
import animation from "../../assets/animations/loading.json";
import Lottie from "lottie-react";

const Loader = () => {
    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center transition-colors duration-300 z-50"
            // data-theme={localStorage.getItem("theme")}
        >
            <Lottie
                className="h-40 my-auto"
                animationData={animation}
                loop={true}
            />
        </div>
    );
};

export default Loader;
