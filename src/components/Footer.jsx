import React from "react";
import { Link } from "react-router";
import {
    CalendarDays,
    FilePlus,
    UserPlus,
    UserRoundPen,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary/20 border-t border-secondary mt-10 md:mt-15 opacity-90">
            {/* Main Footer Content */}
            <div className="border-t border-secondary/30">
                <div className="contain pt-5 md:pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <Link
                                to="/"
                                className="pri-font text-2xl font-medium inline-block"
                            >
                                kindle
                                <span className="text-[#6aff45] sec-font">
                                    V
                                </span>
                                ent
                            </Link>
                            <p className="text-sm leading-relaxed">
                                Connect, create, and participate in meaningful
                                events. Building communities through shared
                                experiences.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="hover:text-accent transition"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-accent transition"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-accent transition"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-accent transition"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 sm:justify-self-center">
                            <h4 className="font-semibold pri-font">
                                Quick Links
                            </h4>
                            <div className="space-y-2">
                                <Link
                                    to="/event/upcoming"
                                    className="flex items-center gap-2 hover:text-accent transition text-sm"
                                >
                                    <CalendarDays size={16} />
                                    Upcoming Events
                                </Link>
                                <Link
                                    to="/event/create"
                                    className="flex items-center gap-2 hover:text-accent transition text-sm"
                                >
                                    <FilePlus size={16} />
                                    Create Event
                                </Link>
                                <Link
                                    to="/event/join"
                                    className="flex items-center gap-2 hover:text-accent transition text-sm"
                                >
                                    <UserPlus size={16} />
                                    Join Events
                                </Link>
                                <Link
                                    to="/event/manage"
                                    className="flex items-center gap-2 hover:text-accent transition text-sm"
                                >
                                    <UserRoundPen size={16} />
                                    Manage Events
                                </Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 lg:justify-self-center">
                            <h4 className="font-semibold pri-font">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail size={16} />
                                    <span>hello@kindlevent.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Phone size={16} />
                                    <span>+880 1234-567890</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin size={16} />
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="">
                <div className="contain pt-8 pb-2">
                    <p className="text-gray-500 text-sm text-center">
                        © 2025 KindleVent. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
