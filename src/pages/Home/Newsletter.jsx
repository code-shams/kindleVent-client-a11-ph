import React from "react";
import { BellPlus, BellRing } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import { useRef } from "react";

const Newsletter = () => {
    const mail = useRef();
    const handleClick = () => {
        mail.current.value = "";
        toast.success("Subscribed!", {
            theme: "dark",
            hideProgressBar: true,
            transition: Bounce,
            position: "top-center",
            autoClose: 1000
        })
    }
    return (
        <div className="pri-font bg-secondary/30 border-2 border-secondary/50 shadow-xl rounded-lg p-3 md:p-10 mt-5 md:mt-10 space-y-3 md:space-y-6 drop-shadow-2xl">
            <h1 className="text-center text-base md:text-2xl font-medium mx-auto sec-font drop-shadow-lg flex flex-col sm:flex-row items-center justify-center gap-1">
                <BellRing />
                Never Miss an Opportunity: Get Event Updates & Insights!
            </h1>
            <p className="w-full text-xs md:text-base text-center sm:w-10/12 mx-auto">
                Ready to make a difference? Subscribe to our newsletter for a
                regular dose of inspiration. We'll share success stories, new
                event listings, and tips for community building, ensuring you're
                always connected to the pulse of social development.
            </p>
            <div className="gap-2 flex flex-col sm:flex-row items-center sm:justify-center">
                <input
                    type="text"
                    ref={mail}
                    placeholder="Enter your email"
                    className="input input-xs md:input-md rounded-md bg-black/20 backdrop-blur-lg focus:outline-none focus:border-none shadow-lg text-white w-9/12 sm:w-6/12 mx-auto sm:m-0"
                />
                <button onClick={handleClick} className="btn btn-primary btn-xs md:btn-md hover:bg-accent hover:border-none hover:-translate-y-1 transition pri-font">
                    <BellPlus className="size-3 md:size-5"></BellPlus>
                    Notify me
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
