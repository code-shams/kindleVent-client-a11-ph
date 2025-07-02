import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";

const Homepage = () => {
    return (
        <div className="contain">
            <Banner></Banner>
            <Features></Features>
            <Gallery></Gallery>
            <section id="newsletter" className="scroll-mt-20">
                <Newsletter></Newsletter>
            </section>
        </div>
    );
};

export default Homepage;
