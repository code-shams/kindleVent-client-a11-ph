import { UserPlus, UserRoundPen, FilePlus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Features = () => {
    return (
        <div className="mt-5 md:mt-10 pri-font bg-secondary/20 rounded-xl border-2 border-secondary/10 shadow-lg overflow-hidden p-0 md:p-7 pt-3 drop-shadow-lg">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-full mx-auto drop-shadow-lg sec-font">
                How You Can Drive Change
            </h1>
            {/* Cards */}
            <section className="flex flex-col md:flex-row gap-1 md:gap-5 md:justify-between pt-3  md:pt-6">
                {/* CARD1 */}
                <div className="flex flex-col gap-1 md:gap-3 bg-secondary/30 drop-shadow-sm border-2 border-secondary/50 p-4 text-center rounded-2xl scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Create Event
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Turn your vision into impact. Our platform simplifies
                        organizing and promoting social development events,
                        helping you rally participants and create positive
                        change effortlessly.
                    </p>
                    <Link className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full">
                        <FilePlus className="size-4"/>
                        Start an Event
                    </Link>
                </div>
                {/* card2 */}

                <div className="flex flex-col gap-3 bg-secondary/30 drop-shadow-sm border-2 border-secondary/50 p-4 text-center rounded-2xl scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Join the Community
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Connect with a vibrant network of individuals dedicated
                        to social good. Discover meaningful events, lend your
                        skills, and collaborate for shared inspiration and
                        collective impact.
                    </p>
                    <Link className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full">
                        <UserPlus className="size-4" />
                        Explore Community
                    </Link>
                </div>

                {/* card3 */}
                <div className="flex flex-col gap-3 bg-secondary/30 drop-shadow-sm border-2 border-secondary/50 p-4 text-center rounded-2xl scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Manage Events
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Effortlessly oversee your initiatives. Our dashboard
                        offers tools to track registrations, send updates,
                        communicate with volunteers, and monitor event progress,
                        so you can focus on impact.
                    </p>
                    <Link className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full">
                        <UserRoundPen className="size-4" />
                        My Events
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Features;
