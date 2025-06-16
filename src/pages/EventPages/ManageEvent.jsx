import React, { use, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";
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
    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="pri-font bg-secondary/20 border-2 border-secondary/10 rounded-xl shadow-lg p-0 md:p-4 drop-shadow-lg">
                    {eventInfo.length === 0 ? (
                        <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                            You haven't created any events yet!
                        </h1>
                    ) : (
                        <>
                            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-max mx-auto drop-shadow-lg sec-font">
                                Manage Events
                            </h1>
                            {/* All Event Cards Container */}
                            <div className="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3 pt-3 md:pt-5">
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
            )}
        </>
    );
};

export default ManageEvent;
