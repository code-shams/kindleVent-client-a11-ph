import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Features from "./Features";

const Homepage = () => {
    return (
        <div className="contain">
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Homepage;
