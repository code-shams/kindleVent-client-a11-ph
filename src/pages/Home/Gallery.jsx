import React from "react";

const Gallery = () => {
    return (
        <div className="mt-5 md:mt-10 pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-7 pt-3 drop-shadow-lg">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">Gallery</h1>
            {/* Images */}
            <section className="contain grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
                {/* image1 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out ">
                        Tree Plantation - Hossainpur, Kishoreganj
                    </p>
                </div>

                {/* image2 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out overflow-hidden">
                        Environmental Conservation - Sylhet Division
                    </p>
                </div>

                {/* image3 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out overflow-hidden">
                        Community Garden Project - Chittagong Hill Tracts
                    </p>
                </div>

                {/* image4 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out overflow-hidden">
                        Forest Restoration - Sundarbans Reserve
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
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out overflow-hidden">
                        Green Initiative - Rajshahi District
                    </p>
                </div>

                {/* image6 */}
                <div className="relative scale-95 hover:scale-100 transition group overflow-hidden rounded-lg">
                    <img
                        className="rounded-lg w-full"
                        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=500&fit=crop"
                        alt=""
                    />
                    <p className="p-2 w-full bg-secondary/20 drop-shadow-lg backdrop-blur-lg absolute top-0 text-sm font-semibold text-center text-white h-16 group-hover:h-96 group-hover:text-accent transition-all duration-500 ease-in-out overflow-hidden">
                        Reforestation Campaign - Barisal Region
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
