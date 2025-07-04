import { UserPlus, FilePlus, CalendarRange, FileBox } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Features = () => {
    return (
        <div className="mt-7 md:mt-14 overflow-hidden pri-font">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 pb-3 md:pb-5 w-full mx-auto drop-shadow-lg sec-font">
                How You Can Drive Change
            </h1>
            {/* Cards */}
            <section className="bg-black/5 rounded-xl border-2 border-secondary/10  p-2 md:p-5 drop-shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 md:justify-between overflow-hidden">
                {/* CARD1 */}
                <div className="flex flex-col gap-3 bg-secondary/30 border-2 border-secondary/50 p-4 text-center rounded-2xl sm:scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Explore Events
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Discover a variety of upcoming events focused on social
                        development. Find opportunities to participate, learn,
                        and contribute to causes that matter to you.
                    </p>
                    <Link
                        to="event/upcoming"
                        className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full"
                    >
                        <CalendarRange className="size-4" />
                        Our Events
                    </Link>
                </div>
                {/* card2 */}
                <div className="flex flex-col gap-3 bg-secondary/30 border-2 border-secondary/50 p-4 text-center rounded-2xl sm:scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Join the Community
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Connect with a vibrant network of individuals dedicated
                        to social good. Discover meaningful events, lend your
                        skills, and collaborate for shared inspiration and
                        collective impact.
                    </p>
                    <a
                        href="#newsletter"
                        className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full"
                    >
                        <UserPlus className="size-4" />
                        Join Community
                    </a>
                </div>
                {/* card3 */}
                <div className="flex flex-col gap-1 md:gap-3 bg-secondary/30 border-2 border-secondary/50 p-4 text-center rounded-2xl sm:scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Create Event
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Turn your vision into impact. Our platform simplifies
                        organizing and promoting social development events,
                        helping you rally participants and create positive
                        change effortlessly.
                    </p>
                    <Link
                        to="event/create"
                        className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full"
                    >
                        <FilePlus className="size-4" />
                        Start an Event
                    </Link>
                </div>
                <div className="flex flex-col gap-1 md:gap-3 bg-secondary/30 border-2 border-secondary/50 p-4 text-center rounded-2xl sm:scale-95 hover:scale-100 transition-all duration-500">
                    <h1 className="sec-font text-lg md:text-xl font-bold text-accent drop-shadow-lg">
                        Manage Events
                    </h1>
                    <p className="text-sm md:text-base pb-2 md:pb-0">
                        Turn your vision into impact. Our platform simplifies
                        organizing and promoting social development events,
                        helping you rally participants and create positive
                        change effortlessly.
                    </p>
                    <Link
                        to="event/create"
                        className="mt-auto btn btn-primary btn-xs md:btn-sm hover:bg-accent hover:border-none transition-all duration-300 shadow-sm w-max mx-auto rounded-full"
                    >
                        <FileBox className="size-4" />
                        Manage
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Features;
