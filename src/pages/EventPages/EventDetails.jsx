import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../Hooks/useAxios";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { FilePlus, LucideTag } from "lucide-react";
import { toast, Bounce } from "react-toastify";

const EventDetails = () => {
    // ?local loading
    const [loading, setLoading] = useState(true);

    const { user,logoutUser } = use(AuthContext);

    const navigate = useNavigate();

    // ?custom secure api hook that provides auth headers to request sent
    const { axiosSecure } = useAxios();

    // ?dynamic event id
    const eventId = useParams().id;

    // ?Join Now btn Function
    const handleJoinBtn = () => {
        axiosSecure
            .patch(`/event/join/${eventId}`, { email: user?.email })
            .then((data) => {
                if (data?.data?.modifiedCount) {
                    setJoined(true);
                    eventInfo.participants.push({ email: user?.email });
                    toast.success("Joined this event!", {
                        position: "bottom-center",
                        autoClose: 2000,
                        theme: "dark",
                        transition: Bounce,
                        hideProgressBar: true,
                    });
                } else if (data?.data?.modifiedCount === 0) {
                    toast.warning("You have already joined this event!", {
                        position: "bottom-center",
                        autoClose: 2000,
                        theme: "dark",
                        transition: Bounce,
                        hideProgressBar: true,
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: `${err.status} Error!`,
                    text: `${err.response.data.message}`,
                    icon: "error",
                    position: "center",
                });
            });
    };

    // ?dynamic single event data state to be handle by useEffect below
    const [eventInfo, setEventInfo] = useState([]);

    // ?event joined status state
    const [joined, setJoined] = useState(false);

    //? event data destructuring
    const {
        creatorName,
        title,
        location,
        eventType,
        thumbnail,
        eventDate,
        details,
        participants,
        creatorPhotoURL,
    } = eventInfo || {};

    // ?Getting data from server and storing it to eventInfo state
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axiosSecure(`/event/details/${eventId}`);
                setEventInfo(data.data);
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

    // ?handling event joining state
    useEffect(() => {
        if (participants) {
            for (const p of participants) {
                if (p.email === user?.email) {
                    setJoined(true);
                }
            }
        }
    }, [eventInfo]);

    return (
        <div>
            {loading ? (
                <Loader></Loader>
            ) : (
                <section className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 drop-shadow-lg">
                    <div className="contain mt-3">
                        <h1 className="text-sm sm:text-base md:text-3xl font-medium text-center px-2 md:px-10 mx-auto drop-shadow-lg sec-font mb-3">
                            {title}
                        </h1>
                        <div className="w-full bg-black/20 rounded-lg">
                            <img
                                src={thumbnail}
                                className="w-8/12 mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="space-y-2 p-1 md:p-4">
                            <div className="mb-5">
                                {/* Created by */}
                                <h3 className="font-medium text-sm md:text-lg">
                                    Organizer
                                </h3>
                                {/* Creator Image and Name */}
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
                                    {/* JOIN NOW BTN */}
                                    <div>
                                        <button
                                            onClick={handleJoinBtn}
                                            className={`btn ${
                                                joined
                                                    ? "btn-accent"
                                                    : "btn-primary"
                                            } btn-xs md:btn-sm border-none hover:bg-accent hover:scale-103 hover:-translate-y-1 transition min-w-max`}
                                        >
                                            <FilePlus className="size-4" />
                                            {joined
                                                ? "JOINED EVENT"
                                                : "JOIN EVENT"}
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
                                        <span className="text-sm md:text-base">
                                            {title}
                                        </span>
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
                                    <span className="text-sm md:text-base">
                                        {location}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm md:text-lg">
                                        Date
                                    </h3>
                                    <span className="text-sm md:text-base">
                                        {eventDate}
                                    </span>
                                </div>
                            </div>
                            {/* Details */}
                            <div>
                                <h3 className="font-medium text-sm md:text-lg">
                                    About this event
                                </h3>
                                <span className="text-sm md:text-base">
                                    {details}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default EventDetails;
