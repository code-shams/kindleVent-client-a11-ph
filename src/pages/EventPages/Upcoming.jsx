// import { useLoaderData, useSearchParams } from "react-router";
// import EventCard from "../../components/EventCard";
// import { Funnel, Search, X } from "lucide-react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import useAxios from "../../Hooks/useAxios";
// const Upcoming = () => {
//     const [eventData, setEventData] = useState(useLoaderData());
//     const { axiosDef } = useAxios();
//     // ?search related functionality
//     const searchRef = useRef();
//     const [title, setTitle] = useState("");
//     // ?Search button function
//     const handleSearchBtn = () => {
//         const value = searchRef.current.value;
//         setTitle(value);
//         axiosDef(`/events/upcoming?title=${value}&eventType=${eventType}`)
//             .then((data) => {
//                 setEventData(data.data);
//             })
//             .catch((err) => console.log(err));
//     };
//     //? Clear search function
//     const handleClearSearch = () => {
//         searchRef.current.value = "";
//         setTitle("");
//         axiosDef(`/events/upcoming`)
//             .then((data) => {
//                 setEventData(data.data);
//             })
//             .catch((err) => console.log(err));
//     };

//     // ?filter related functionality
//     const filterRef = useRef();
//     const [eventType, setEventType] = useState("");
//     const handleFilterBtn = () => {
//         const value = filterRef.current.value;
//         setEventType(value);
//         axiosDef(`/events/upcoming?title=${title}&eventType=${value}`)
//             .then((data) => {
//                 setEventData(data.data);
//             })
//             .catch((err) => console.log(err));
//     };
//     const handleClearFilter = () => {
//         filterRef.current.value = "Filter by Event Type";
//         setEventType("Filter by Event Type");
//         axiosDef(`/events/upcoming`)
//             .then((data) => {
//                 setEventData(data.data);
//             })
//             .catch((err) => console.log(err));
//     };
//     return (
//         <div className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
//             <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
//                 Upcoming Events
//             </h1>

//             {/* Search and Filter Section */}
//             <div className="contain px-2 md:px-4 pt-3 md:pt-5 pb-2 md:pb-4">
//                 <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-4">
//                     <div className="flex items-center gap-2 w-full sm:w-1/2 relative">
//                         <input
//                             type="text"
//                             name="search"
//                             ref={searchRef}
//                             defaultValue={title}
//                             className="input input-xs md:input-md rounded-md focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full mx-auto sm:m-0 pr-20"
//                             onChange={(e) => setTitle(e.target.value)}
//                             placeholder={"Search by Title"}
//                         />
//                         <div className="absolute right-2 z-50 flex gap-2 items-center">
//                             <button
//                                 onClick={handleClearSearch}
//                                 type="button"
//                                 className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
//                             >
//                                 <X className="size-3 md:size-4" />
//                             </button>
//                             <button
//                                 onClick={handleSearchBtn}
//                                 type="button"
//                                 className="rounded-full p-1 hover:bg-secondary hover:text-black transition font-normal"
//                             >
//                                 <Search className="size-3 md:size-4" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2 w-full sm:w-1/2 relative">
//                         <select
//                             ref={filterRef}
//                             onChange={handleFilterBtn}
//                             name="eventType"
//                             defaultValue="Filter by Event Type"
//                             className="cursor-pointer appearance-none select select-neutral select-xs md:select-md block w-full rounded-md  border border-secondary focus:border-0 shadow-lg placeholder:font-medium focus:border-none focus:outline-accent "
//                         >
//                             <option value="Filter by Event Type" disabled>
//                                 Filter by Event Type
//                             </option>
//                             <option value="Clean Up">Clean Up</option>
//                             <option value="Environment">Environment</option>
//                             <option value="Education">Education</option>
//                             <option value="Healthcare">Healthcare</option>
//                             <option value="Charity">Charity</option>
//                             <option value="Skill Development">
//                                 Skill Development
//                             </option>
//                             <option value="Food Distribution">
//                                 Food Distribution
//                             </option>
//                             <option value="Community Service">
//                                 Community Service
//                             </option>
//                             <option value="Fundraising">Fundraising</option>
//                             <option value="Awareness Campaign">
//                                 Awareness Campaign
//                             </option>
//                             <option value="Sports & Recreation">
//                                 Sports & Recreation
//                             </option>
//                         </select>
//                         <div className="absolute right-2 z-50 flex gap-2 items-center">
//                             <button
//                                 onClick={handleClearFilter}
//                                 type="button"
//                                 className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
//                             >
//                                 <X className="size-3 md:size-4" />
//                             </button>
//                             <button
//                                 onClick={handleFilterBtn}
//                                 className="rounded-full p-1 bg-base-100 hover:bg-secondary hover:text-black transition font-normal"
//                             >
//                                 <Funnel className="size-3 md:size-4" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Results Count */}
//                 <div className="mt-2 md:mt-3 text-xs md:text-sm sec-font">
//                     Showing {eventData.length} events
//                 </div>
//             </div>

//             {/* All Event Cards Container */}
//             <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
//                 {/* Individual Card Container */}
//                 {eventData.map((eventInfo) => (
//                     <EventCard
//                         key={eventInfo._id}
//                         eventInfo={eventInfo}
//                     ></EventCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Upcoming;

import { useLoaderData, useSearchParams } from "react-router";
import EventCard from "../../components/EventCard";
import { Funnel, Search, X, ArrowUpDown, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useAxios from "../../Hooks/useAxios";

const Upcoming = () => {
    const [eventData, setEventData] = useState(useLoaderData());
    const { axiosDef } = useAxios();

    // ?search related functionality
    const searchRef = useRef();
    const [title, setTitle] = useState("");

    // ?filter related functionality
    const filterRef = useRef();
    const [eventType, setEventType] = useState("");

    // ?sort related functionality
    const sortRef = useRef();
    const [sortOrder, setSortOrder] = useState(1); // 1 for ascending, -1 for descending

    // ?Combined API call function
    const fetchEvents = (
        searchTitle = title,
        filterType = eventType,
        sort = sortOrder
    ) => {
        let url = `/events/upcoming?sort=${sort}`;
        if (searchTitle) url += `&title=${searchTitle}`;
        if (filterType && filterType !== "Filter by Event Type")
            url += `&eventType=${filterType}`;

        axiosDef(url)
            .then((data) => {
                setEventData(data.data);
            })
            .catch((err) => console.log(err));
    };

    // ?Search button function
    const handleSearchBtn = () => {
        const value = searchRef.current.value;
        setTitle(value);
        fetchEvents(value, eventType, sortOrder);
    };

    //? Clear search function
    const handleClearSearch = () => {
        searchRef.current.value = "";
        setTitle("");
        fetchEvents("", eventType, sortOrder);
    };

    const handleFilterBtn = () => {
        const value = filterRef.current.value;
        setEventType(value);
        fetchEvents(title, value, sortOrder);
    };

    const handleClearFilter = () => {
        filterRef.current.value = "Filter by Event Type";
        setEventType("");
        fetchEvents(title, "", sortOrder);
    };

    // ?Sort functionality
    const handleSortChange = () => {
        const value = parseInt(sortRef.current.value);
        setSortOrder(value);
        fetchEvents(title, eventType, value);
    };

    const handleClearSort = () => {
        sortRef.current.value = "1";
        setSortOrder(1);
        fetchEvents(title, eventType, 1);
    };

    return (
        <div className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                Upcoming Events
            </h1>

            {/* Search, Filter and Sort Section */}
            <div className="contain px-2 md:px-4 pt-3 md:pt-5 pb-2 md:pb-4">
                <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-4">
                    {/* Search Input */}
                    <div className="flex items-center gap-2 w-full lg:w-1/3 relative">
                        <input
                            type="text"
                            name="search"
                            ref={searchRef}
                            defaultValue={title}
                            className="input input-xs md:input-md rounded-md focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full mx-auto sm:m-0 pr-20"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"Search by Title"}
                        />
                        <div className="absolute right-2 z-50 flex gap-2 items-center">
                            <button
                                onClick={handleSearchBtn}
                                type="button"
                                className="rounded-full p-1 hover:bg-secondary hover:text-black transition font-normal"
                            >
                                <Search className="size-3 md:size-4" />
                            </button>
                            <button
                                onClick={handleClearSearch}
                                type="button"
                                className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
                            >
                                <X className="size-3 md:size-4" />
                            </button>
                        </div>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="flex items-center gap-2 w-full lg:w-1/3 relative">
                        <select
                            ref={filterRef}
                            onChange={handleFilterBtn}
                            name="eventType"
                            defaultValue="Filter by Event Type"
                            className="cursor-pointer appearance-none select select-neutral select-xs md:select-md block w-full rounded-md border border-secondary focus:border-0 shadow-lg placeholder:font-medium focus:border-none focus:outline-accent"
                        >
                            <option value="Filter by Event Type" disabled>
                                Filter by Event Type
                            </option>
                            <option value="Clean Up">Clean Up</option>
                            <option value="Environment">Environment</option>
                            <option value="Education">Education</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Charity">Charity</option>
                            <option value="Skill Development">
                                Skill Development
                            </option>
                            <option value="Food Distribution">
                                Food Distribution
                            </option>
                            <option value="Community Service">
                                Community Service
                            </option>
                            <option value="Fundraising">Fundraising</option>
                            <option value="Awareness Campaign">
                                Awareness Campaign
                            </option>
                            <option value="Sports & Recreation">
                                Sports & Recreation
                            </option>
                        </select>
                        <div className="absolute right-5 z-50 flex gap-2 items-center">
                            <button
                                onClick={handleFilterBtn}
                                className="rounded-full p-1 bg-base-100 hover:bg-secondary hover:text-black transition font-normal"
                            >
                                <Funnel className="size-3 md:size-4" />
                            </button>
                            <button
                                onClick={handleClearFilter}
                                type="button"
                                className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
                            >
                                <X className="size-3 md:size-4" />
                            </button>
                        </div>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 w-full lg:w-1/3 relative">
                        <select
                            ref={sortRef}
                            onChange={handleSortChange}
                            name="sortOrder"
                            defaultValue="1"
                            className="cursor-pointer appearance-none select select-neutral select-xs md:select-md block w-full rounded-md border border-secondary focus:border-0 shadow-lg placeholder:font-medium focus:border-none focus:outline-accent"
                        >
                            <option value="1">Happening Soon</option>
                            <option value="-1">Later Events First</option>
                        </select>
                        <div className="absolute right-5 z-50 flex gap-2 items-center">
                            <button
                                onClick={handleSortChange}
                                className="rounded-full p-1 bg-base-100 hover:bg-secondary hover:text-black transition font-normal"
                            >
                                <CalendarDays className="size-3 md:size-4" />
                            </button>
                            <button
                                onClick={handleClearSort}
                                type="button"
                                className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
                            >
                                <X className="size-3 md:size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-2 md:mt-3 text-xs md:text-sm sec-font">
                    Showing {eventData.length} events
                </div>
            </div>

            {/* All Event Cards Container */}
            <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
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
