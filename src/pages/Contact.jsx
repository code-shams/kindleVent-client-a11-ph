import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Send,
    User,
    MessageSquare,
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add your form submission logic here
    };

    const contactMethods = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email Us",
            description: "Send us an email anytime",
            contact: "hello@kindlevent.com",
            action: "mailto:hello@kindlevent.com",
            color: "bg-white/30",
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Call Us",
            description: "Call us during business hours",
            contact: "+880 1234-567890",
            action: "tel:+8801234567890",
            color: "bg-white/30",
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "WhatsApp",
            description: "Chat with us on WhatsApp",
            contact: "+880 1234-567890",
            action: "https://wa.me/8801234567890",
            color: "bg-white/30",
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Visit Us",
            description: "Come visit our office",
            contact: "Dhaka, Bangladesh",
            action: "https://maps.google.com/?q=Dhaka,Bangladesh",
            color: "bg-white/30",
        },
    ];

    const socialLinks = [
        {
            icon: <Facebook className="w-6 h-6" />,
            name: "Facebook",
            url: "#",
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            name: "Twitter",
            url: "#",
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            name: "Instagram",
            url: "#",
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            name: "LinkedIn",
            url: "#",
        },
    ];

    return (
        <div className="min-h-screenpt-20 pb-10 pri-font">
            <div className="contain">
                {/* Header Section */}
                <div className="text-center mb-2 md:mb-5">
                    <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10  w-full mx-auto drop-shadow-lg sec-font">
                        Get In Touch
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto pri-font">
                        Have a question about events, need help getting started,
                        or want to collaborate? We'd love to hear from you.
                        Choose your preferred way to connect with us.
                    </p>
                </div>

                {/* Contact Methods Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className={`${method.color} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-secondary/30 cursor-pointer`}
                        >
                            <div className="mb-4">{method.icon}</div>
                            <h3 className="text-xl font-semibold pri-font mb-2">
                                {method.title}
                            </h3>
                            <p className="text-sm mb-3">{method.description}</p>
                            <p className="font-medium ">{method.contact}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 shadow-lg h-max">
                        <h2 className="text-2xl font-bold sec-font mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6" />
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full pl-12 pr-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full pl-12 pr-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows="6"
                                    className="w-full px-4 py-3 border border-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-secondary/40 border border-black/10 w-max mx-auto hover:bg-accent/90 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social */}
                    <div className="space-y-8">
                        {/* Office Info */}
                        <div className="bg-white/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold sec-font mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg">
                                        <Mail className="w-6 h-6 " />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold pri-font">
                                            Email Address
                                        </h3>
                                        <p className="">hello@kindlevent.com</p>
                                        <p className="text-sm">
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg">
                                        <Phone className="w-6 h-6 " />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold pri-font">
                                            Phone Number
                                        </h3>
                                        <p className="">+880 1234-567890</p>
                                        <p className="text-sm">
                                            Mon-Fri, 9AM-6PM (GMT+6)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 " />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold pri-font">
                                            Office Location
                                        </h3>
                                        <p className="">Dhaka, Bangladesh</p>
                                        <p className="text-sm">
                                            Available for meetings by
                                            appointment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold sec-font mb-6">
                                Follow Us
                            </h2>

                            <p className="mb-6">
                                Stay connected with us on social media for
                                updates, event highlights, and community
                                stories.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={`flex items-center gap-3 p-4 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-all duration-300 ${social.color}`}
                                    >
                                        {social.icon}
                                        <span className="font-medium">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold sec-font mb-6">
                                Business Hours
                            </h2>

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        Monday - Friday
                                    </span>
                                    <span className="">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">
                                        Saturday
                                    </span>
                                    <span className="">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Sunday</span>
                                    <span className="">Closed</span>
                                </div>
                                <p className="text-sm mt-4">
                                    * All times are in GMT+6 (Bangladesh
                                    Standard Time)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
