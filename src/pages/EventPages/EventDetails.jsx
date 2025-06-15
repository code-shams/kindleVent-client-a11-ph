import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { FilePlus, LucideTag } from "lucide-react";

const EventDetails = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);
    const { axiosSecure } = useAxios();
    const eventId = useParams().id;

    const [eventInfo, setEventInfo] = useState([]);
    const {
        creatorName,
        title,
        location,
        eventType,
        thumbnail,
        eventDate,
        details,
        creatorPhotoURL,
    } = eventInfo || {};
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axiosSecure(`/event/details/${eventId}`);
                setEventInfo(data.data);
                // const isoDate = new Date(eventDate);
                // const date = format(isoDate, "dd/MM/yyyy");
                // eventInfo.eventDate = date;
                setLoading(false);
            } catch (err) {
                setLoading(false);
                logoutUser();
                navigate("/sign-in");
                Swal.fire({
                    title: `${err.status} Error!`,
                    text: `${err.response.data.message}`,
                    icon: "error",
                    position: "center",
                });
            }
        };
        if (eventId) {
            getData();
        }
    }, [axiosSecure]);
    return (
        <div>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="contain pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 drop-shadow-lg">
                    <h1 className="text-sm sm:text-base md:text-3xl font-medium text-center px-2 md:px-10 mx-auto drop-shadow-lg sec-font mb-3">
                        {title}
                    </h1>
                    <div className="w-full bg-black/20">
                        <img
                            src={thumbnail}
                            className="w-8/12 mx-auto"
                            alt=""
                        />
                    </div>
                    <div className="space-y-2 p-1 md:p-4">
                        {/* Created by */}
                        <div className="mb-5">
                            <h3 className="font-medium text-sm md:text-lg">
                                Organizer
                            </h3>
                            <div className="flex justify-between gap-5">
                                <div className="flex items-center gap-1 ">
                                    <img
                                        src={creatorPhotoURL}
                                        className="h-6 rounded-full"
                                        alt=""
                                    />
                                    <span className="text-sm">
                                        {creatorName}
                                    </span>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-xs md:btn-sm border-none hover:bg-accent hover:scale-103 hover:-translate-y-1 transition min-w-max">
                                        <FilePlus className="size-4" />
                                        JOIN EVENT
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between gap-5">
                                <div>
                                    <h1 className="text-sm md:text-lg font-medium">
                                        Title
                                    </h1>
                                    <span className="text-sm md:text-base">{title}</span>
                                </div>
                                <span className="flex items-center justify-center gap-1 text-xs md:text-sm p-1 px-2 rounded-full min-w-max h-max bg-secondary/50 border-0 text-center">
                                    <LucideTag className="size-3"></LucideTag>
                                    {eventType}
                                </span>
                            </div>
                        </div>
                        {/* location */}
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-medium text-sm md:text-lg">
                                    Location
                                </h3>
                                <span className="text-sm md:text-base">{location}</span>
                            </div>
                            <div>
                                <h3 className="font-medium text-sm md:text-lg">
                                    Date
                                </h3>
                                <span className="text-sm md:text-base">{eventDate}</span>
                            </div>
                        </div>
                        {/* Details */}
                        <div>
                            <h3 className="font-medium text-sm md:text-lg">
                                About this event
                            </h3>
                            <span className="text-sm md:text-base">{details}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
