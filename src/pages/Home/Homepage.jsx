import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Features from "./Features";
import Gallery from "./Gallery";
import Newsletter from "./Newsletter";

const Homepage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Features></Features>
            <Gallery></Gallery>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Homepage;
