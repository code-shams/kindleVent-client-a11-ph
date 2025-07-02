import React, { useState } from "react";

const Gallery = () => {
    const galleryItems = [
        {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
            eventTitle: "Tree Plantation",
            location: "Hossainpur, Kishoreganj",
        },
        {
            src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
            eventTitle: "Food Distribution for Flood Victims",
            location: "Sylhet",
        },
        {
            src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
            eventTitle: "Community Garden Project",
            location: "Chittagong Hill Tracts",
        },
        {
            src: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop&auto=format",
            eventTitle: "Blood Donation Camp and Health Awareness Program",
            location: "Dhaka Cantonment",
        },
        {
            src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=500&fit=crop",
            eventTitle: "Green Initiative",
            location: "Rajshahi District",
        },
        {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format",
            eventTitle:
                "Free Computer Literacy Workshop For Underprivileged Youth",
            location: "Barishal",
        },
    ];

    return (
        <div className="mt-7 md:mt-14 overflow-hidden pri-font">
                <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 pb-3 md:pb-5 w-full mx-auto drop-shadow-lg sec-font">
                    Gallery
                </h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5 bg-black/5 border-2 border-secondary/10 rounded-xl p-0 md:p-7 drop-shadow-lg">
                {galleryItems.map((item, index) => (
                    <GalleryItem key={index} item={item} />
                ))}
            </section>
        </div>
    );
};

const GalleryItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleTouchStart = () => setIsHovered((prev) => !prev);

    return (
        <div
            className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
        >
            <img
                className="rounded-lg w-full"
                src={item.src}
                alt={item.title}
            />
            <p
                className={`
            p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-lg absolute top-0
            text-base font-semibold text-center h-full text-accent pt-5 transition-all duration-500 ease-in-out
            ${isHovered ? "opacity-100" : "opacity-0"}
        `}
            >
                {item.eventTitle}
                <br />
                {item.location}
            </p>
        </div>
    );
};

export default Gallery;
