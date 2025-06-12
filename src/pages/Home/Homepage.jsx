import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";

const Homepage = () => {
    return (
        <div className="contain">
            <Banner></Banner>
            <Features></Features>
            <Gallery></Gallery>
        </div>
    );
};

export default Homepage;
