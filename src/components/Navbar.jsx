import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
    const { user } = use(AuthContext);
    const [active, setActive] = useState(false);
    const authBtn = () => {
        setActive(!active);
    };
    return (
        <nav
            className="contain z-50 p-4
            bg-white/20 backdrop-blur-sm
            border border-t-0 border-x border-b border-secondary/30
            shadow-md rounded-2xl fixed top-0 right-0 left-0 flex items-center justify-between pri-font"
        >
            <div>
                <Link
                    to="/"
                    className="pri-font text-xl lg:text-2xl font-medium"
                >
                    kindle<span className="text-primary">V</span>ent
                </Link>
            </div>
            <div className="flex gap-3 items-center">
                <NavLink id="upcoming" className=" font-medium" to="/event/upcoming">
                    Upcoming Events
                </NavLink>
                {user ? (
                    <div>
                        <img
                            className="rounded-full w-9 h-9"
                            src={user?.photoURL}
                            alt=""
                        />
                    </div>
                ) : (
                    <div className="space-x-3">
                        <NavLink
                            onClick={authBtn}
                            className="navBtn btn btn-outline btn-sm font-medium hover:bg-accent"
                            to="/sign-in"
                        >
                            SIGN IN
                        </NavLink>
                        <NavLink
                            className="navBtn btn btn-outline btn-sm font-medium hover:bg-accent"
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
