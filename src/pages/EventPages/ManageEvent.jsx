// import React, { use, useEffect, useState } from "react";
// import useAxios from "../../Hooks/useAxios";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import Loader from "../../components/Loader/Loader";
// import EventCard from "../../components/EventCard";

// const ManageEvent = () => {
//     const { axiosSecure } = useAxios();

//     const navigate = useNavigate();

//     const { user, logoutUser } = use(AuthContext);

//     const [loading, setLoading] = useState(true);

//     const [eventInfo, setEventInfo] = useState([]);

//     useEffect(() => {
//         axiosSecure(`event/user?email=${user?.email}`)
//             .then((data) => {
//                 setLoading(false);
//                 setEventInfo(data.data);
//             })
//             .catch((err) => {
//                 setLoading(false);
//                 logoutUser();
//                 navigate("/sign-in");
//                 Swal.fire({
//                     title: `${err.status} Error!`,
//                     text: `${err.response.data.message}`,
//                     icon: "error",
//                     position: "center",
//                 });
//             });
//     }, [axiosSecure, user]);
//     return (
//         <>
//             {loading ? (
//                 <Loader></Loader>
//             ) : (
//                 <div className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
//                     {eventInfo.length === 0 ? (
//                         <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
//                             You haven't created any events yet!
//                         </h1>
//                     ) : (
//                         <>
//                             <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
//                                 Manage Events
//                             </h1>
//                             {/* All Event Cards Container */}
//                             <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
//                                 {/* Individual Card Container */}
//                                 {eventInfo.map((eventInfo) => (
//                                     <EventCard
//                                         manage={true}
//                                         key={eventInfo._id}
//                                         eventInfo={eventInfo}
//                                     ></EventCard>
//                                 ))}
//                             </div>
//                         </>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default ManageEvent;

import React, { use, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate, Link } from "react-router";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
import { format } from "date-fns";
import {
    Calendar1,
    LucideSparkle,
    MapPin,
    LucideTag,
    MoveRight,
    Pencil,
    Eye,
    Trash2,
} from "lucide-react";
import EventCard from "../../components/EventCard";

const ManageEvent = () => {
    const { axiosSecure } = useAxios();
    const navigate = useNavigate();
    const { user, logoutUser } = use(AuthContext);
    const [loading, setLoading] = useState(true);
    const [eventInfo, setEventInfo] = useState([]);

    useEffect(() => {
        axiosSecure(`event/user?email=${user?.email}`)
            .then((data) => {
                setLoading(false);
                setEventInfo(data.data);
            })
            .catch((err) => {
                setLoading(false);
                logoutUser();
                navigate("/sign-in");
                Swal.fire({
                    title: `${err.status} Error!`,
                    text: `${err.response.data.message}`,
                    icon: "error",
                    position: "center",
                });
            });
    }, [axiosSecure, user]);

    const handleDelete = (eventId, eventTitle) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete "${eventTitle}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Add your delete logic here
                axiosSecure
                    .delete(`/event/${eventId}`)
                    .then(() => {
                        setEventInfo((prev) =>
                            prev.filter((event) => event._id !== eventId)
                        );
                        Swal.fire(
                            "Deleted!",
                            "Event has been deleted.",
                            "success"
                        );
                    })
                    .catch((err) => {
                        Swal.fire("Error!", "Failed to delete event.", "error");
                    });
            }
        });
    };

    const formatDate = (dateString) => {
        const isoDate = new Date(dateString);
        return format(isoDate, "dd/MM/yyyy");
    };

    const truncateText = (text, maxLength = 50) => {
        if (!text) return "";
        return text.length > maxLength
            ? text.substring(0, maxLength) + "..."
            : text;
    };

    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="contain pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-2 md:p-4 drop-shadow-lg">
                    {eventInfo.length === 0 ? (
                        <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                            You haven't created any events yet!
                        </h1>
                    ) : (
                        <>
                            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font mb-0 md:mb-6">
                                Manage Events
                            </h1>

                            {/* Desktop Table View */}
                            <div className="hidden lg:block overflow-x-hidden">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-base font-semibold">
                                                Event
                                            </th>
                                            <th className="text-base font-semibold">
                                                Creator
                                            </th>
                                            <th className="text-base font-semibold">
                                                Type
                                            </th>
                                            <th className="text-base font-semibold">
                                                Location
                                            </th>
                                            <th className="text-base font-semibold">
                                                Date
                                            </th>
                                            <th className="text-base font-semibold text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventInfo.map((event) => (
                                            <tr
                                                key={event._id}
                                                className="hover"
                                            >
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img
                                                                    src={
                                                                        event.thumbnail ||
                                                                        "/api/placeholder/48/48"
                                                                    }
                                                                    alt={
                                                                        event.title
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-sm flex items-center gap-1">
                                                                <LucideSparkle className="size-3" />
                                                                {truncateText(
                                                                    event.title,
                                                                    30
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div className="avatar">
                                                            <div className="w-6 h-6 rounded-full">
                                                                <img
                                                                    src={
                                                                        event.creatorPhotoURL ||
                                                                        "/api/placeholder/24/24"
                                                                    }
                                                                    alt={
                                                                        event.creatorName
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <span className="text-sm">
                                                            {event.creatorName}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="flex items-center justify-center w-max gap-1 text-xs sm:text-sm p-1 px-2 rounded-full min-w-max h-max bg-secondary/50 border-0">
                                                        <LucideTag className="size-3" />
                                                        {event.eventType}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="flex items-center gap-1 text-sm">
                                                        <MapPin className="size-3" />
                                                        {truncateText(
                                                            event.location,
                                                            25
                                                        )}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="flex items-center gap-1 text-sm">
                                                        <Calendar1 className="size-3" />
                                                        {formatDate(
                                                            event.eventDate
                                                        )}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2 justify-center">
                                                        <Link
                                                            to={`/event/details/${event._id}`}
                                                            className="btn btn-ghost btn-xs tooltip"
                                                            data-tip="View Details"
                                                        >
                                                            <Eye className="size-4" />
                                                        </Link>
                                                        <Link
                                                            to={`/event/update/${event._id}`}
                                                            className="btn btn-ghost btn-xs tooltip"
                                                            data-tip="Edit Event"
                                                        >
                                                            <Pencil className="size-4" />
                                                        </Link>
                                                        <button
                                                            className="btn btn-ghost btn-xs text-error tooltip"
                                                            data-tip="Delete Event"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    event._id,
                                                                    event.title
                                                                )
                                                            }
                                                        >
                                                            <Trash2 className="size-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile/Tablet Card View */}
                            <div className="block lg:hidden pri-font">
                                {eventInfo.length === 0 ? (
                                    <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                                        You haven't created any events yet!
                                    </h1>
                                ) : (
                                    <>
                                        {/* All Event Cards Container */}
                                        <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3">
                                            {/* Individual Card Container */}
                                            {eventInfo.map((eventInfo) => (
                                                <EventCard
                                                    manage={true}
                                                    key={eventInfo._id}
                                                    eventInfo={eventInfo}
                                                ></EventCard>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ManageEvent;
