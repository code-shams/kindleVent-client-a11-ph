import React, { use, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import EventCard from "../../components/EventCard";
import Loader from "../../components/Loader/Loader";

const JoinEvent = () => {
    const navigate = useNavigate();
    const { axiosSecure } = useAxios();
    const { user, logoutUser } = use(AuthContext);
    const [loading, setLoading] = useState(true);
    const [joinedEvents, setJoinedEvents] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axiosSecure(
                    `/events/joined?email=${user?.email}`
                );
                setJoinedEvents(data.data);
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
        getData();
    }, [user, axiosSecure]);

    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
                    {joinedEvents.length === 0 ? (
                        <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                            You haven't joined any events yet!
                        </h1>
                    ) : (
                        <>
                            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                                Joined Events
                            </h1>
                            {/* All Event Cards Container */}
                            <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-1">
                                {/* Individual Card Container */}
                                {joinedEvents.map((eventInfo) => (
                                    <EventCard
                                        key={eventInfo._id}
                                        eventInfo={eventInfo}
                                    ></EventCard>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default JoinEvent;
