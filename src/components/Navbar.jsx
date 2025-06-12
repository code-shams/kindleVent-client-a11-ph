import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";
import { FilePlus, UserPlus, UserRoundPen, CalendarDays } from "lucide-react";

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    const [menuActive, setMenuActive] = useState(false);
    const handleSignOut = () => {
        logoutUser();
    };
    const handleDropdown = () => {
        setMenuActive(true);
    };
    const handleDropdownCancel = () => {
        setMenuActive(false);
    };
    return (
        <nav
            className="contain z-20 p-2 md:p-4
            bg-white/10 backdrop-blur-md
            border border-t-0 border-secondary/30
            shadow-md rounded-2xl rounded-t-none fixed top-0 right-0 left-0 flex items-center justify-between pri-font"
        >
            <div>
                <Link
                    to="/"
                    className="pri-font text-lg md:text-2xl font-medium"
                >
                    kindle
                    <span className="text-[#6aff45] sec-font">
                        V
                    </span>
                    ent
                </Link>
            </div>
            <div className="flex gap-3 items-center">
                <NavLink
                    className="navlinks font-medium hidden md:block hover:text-accent transition"
                    to="/event/upcoming"
                >
                    Upcoming Events
                </NavLink>
                {user ? (
                    <div className="flex items-center justify-between gap-3">
                        {/* Image Container */}
                        <div className="group">
                            <img
                                onClick={handleDropdown}
                                className="rounded-full w-12 h-12 cursor-pointer"
                                src={user?.photoURL}
                                alt=""
                            />
                            {/* Hover Name */}
                            <span
                                className={`hidden ${
                                    menuActive ? "" : "md:block"
                                } uppercase text-center sec-font font-medium rounded border-secondary p-1 absolute w-54 border right-5 top-17 bg-secondary/90 drop-shadow-2xl translate-x-96 scale-0 group-hover:translate-0 group-hover:scale-100 transition-all duration-400 ease-in-out`}
                            >
                                {user.displayName}
                            </span>
                        </div>
                        {/* Dropdown Menu */}
                        <div
                            className={`z-50 border-secondary border-2 bg-secondary/90 drop-shadow-2xl rounded shadow-lg p-2 w-42 md:w-54 absolute right-5 top-17 space-y-2 text-black ${
                                menuActive
                                    ? "translate-0 scale-100"
                                    : "translate-x-96 scale-0"
                            }
                    transition-all duration-400 ease-in-out`}
                        >
                            <button
                                className="btn btn-circle btn-xs md:btn-sm text-white btn-error border-none hover:bg-accent hover:text-black absolute right-1 top-1"
                                onClick={handleDropdownCancel}
                            >
                                X
                            </button>
                            <NavLink
                                className="navlinks text-xs md:text-base flex items-center gap-1 hover:text-accent font-medium md:hidden transition"
                                to="/event/upcoming"
                            >
                                <CalendarDays />
                                Upcoming Events
                            </NavLink>
                            <NavLink
                                className="navlinks text-xs md:text-base hover:text-accent flex items-center gap-1 font-medium transition"
                                to="/event/create"
                            >
                                <FilePlus />
                                Create Event
                            </NavLink>
                            <NavLink
                                className="navlinks text-xs md:text-base hover:text-accent flex items-center gap-1 font-medium transition"
                                to="/event/join"
                            >
                                <UserPlus />
                                Join Events
                            </NavLink>
                            <NavLink
                                className="navlinks text-xs md:text-base hover:text-accent flex items-center gap-1 font-medium transition"
                                to="/event/manage"
                            >
                                <UserRoundPen />
                                Manage Events
                            </NavLink>
                            <button className="btn btn-outline btn-sm font-medium hover:bg-accent hover:text-black block md:hidden transition">
                                SIGN OUT
                            </button>
                        </div>
                        {/* Navbar btn */}
                        <div className="hidden md:block">
                            <button
                                onClick={handleSignOut}
                                className="btn btn-outline btn-sm font-medium hover:bg-accent hover:text-black transition"
                            >
                                SIGN OUT
                            </button>
                        </div>
                    </div>
                ) : (
                    // Navbar btn
                    <div className="space-x-3">
                        <NavLink
                            className="navBtn btn btn-outline btn-xs md:btn-sm font-medium hover:bg-accent hover:text-black transition"
                            to="/sign-in"
                        >
                            SIGN IN
                        </NavLink>
                        <NavLink
                            className="navBtn btn btn-outline btn-xs md:btn-sm font-medium hover:bg-accent hover:text-black transition"
                            to="/sign-up"
                        >
                            SIGN UP
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
