import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard";
const Upcoming = () => {
    const eventData = useLoaderData();
    return (
        <div className="contain pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                Upcoming Events
            </h1>
            {/* All Event Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
                {/* Individual Card Container */}
                {eventData.map((eventInfo) => (
                    <EventCard
                        key={eventInfo._id}
                        eventInfo={eventInfo}
                    ></EventCard>
                ))}
            </div>
        </div>
    );
};

export default Upcoming;
