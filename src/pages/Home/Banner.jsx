import React from "react";
import banner from "../../assets/banner.jpg";
import { Sparkles, Handshake } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

const Banner = () => {
    const bgStyle = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
    };

    return (
        <div
            className="w-full p-2 md:p-10 relative rounded-xl overflow-hidden flex items-center"
            style={bgStyle}
        >
            <div className="bg-black/10 absolute inset-0"></div>
            <div className="contain bg-secondary/20 backdrop-blur-lg w-full mx-auto my-auto p-3 md:p-10 h-full rounded-lg pri-font text-center space-y-1 md:space-y-5 flex flex-col justify-center items-center">
                <p className="rounded-full flex items-center gap-2 text-sm md:text-base font-semibold text-primary sec-font">
                    <Sparkles className="text-primary size-4 md:size-auto"></Sparkles>
                    Connect.
                    <span>
                        <Typewriter
                            words={[
                                "Collaborate.",
                                "Innovate.",
                                "Grow.",
                                "Empower.",
                                "Create Change!",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
                <p className="text-xl md:text-5xl font-bold">
                    Where <span className="text-accent">Communities</span> Come
                    Alive
                </p>
                <p className="text-center text-xs md:text-xl w-full md:w-10/12 mx-auto font-medium">
                    Join thousands of people creating meaningful connections
                    through social development events. Discover workshops,
                    meetups, and experiences that help you grow personally and
                    professionally.
                </p>
                <Link
                    to="/sign-in"
                    className="btn btn-primary btn-xs md:btn-md hover:bg-accent hover:border-none"
                >
                    <Handshake className="size-4 md:size-auto" /> JOIN US !
                </Link>
            </div>
        </div>
    );
};

export default Banner;
