import { useLoaderData } from "react-router";
import { format } from "date-fns";

const Upcoming = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    // for (const event of eventData) {
    //     const isoDate = new Date(event.eventDate);
    //     const formatted = format(isoDate, "dd/MM/yyyy");
    //     console.log(formatted);
    // }
    return <div>Upcoming</div>;
};

export default Upcoming;
