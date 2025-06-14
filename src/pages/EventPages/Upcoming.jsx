import { useLoaderData } from "react-router";

const Upcoming = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    return <div>Upcoming</div>;
};

export default Upcoming;
