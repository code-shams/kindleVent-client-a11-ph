import React from "react";

const Gallery = () => {
    return (
        <div className="mt-5 md:mt-10 pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-7 pt-3 drop-shadow-lg">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                Gallery
            </h1>
            {/* Images */}
            <section className="contain grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
                {/* image1 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Tree Plantation - Hossainpur, Kishoreganj
                    </p>
                </div>

                {/* image2 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Food Distribution for Flood Victims - Sylhet
                    </p>
                </div>

                {/* image3 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Community Garden Project - Chittagong Hill Tracts
                    </p>
                </div>

                {/* image4 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop&auto=format"
                        alt=""
                    />
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Blood Donation Camp and Health Awareness Program
                    </p>
                </div>

                {/* image5 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <div className="bg-black/20 absolute inset-0 z-0"></div>
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Green Initiative - Rajshahi District
                    </p>
                </div>

                {/* image6 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format"
                        alt=""
                    />
                    <p className="p-2 w-full bg-white/10 drop-shadow-lg backdrop-blur-xs absolute top-0 text-sm font-semibold text-center text-white h-max lg:h-96 group-hover:h-14 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Free Computer Literacy Workshop for Underprivileged
                        Youth
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
