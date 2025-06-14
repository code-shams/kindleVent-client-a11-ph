import React, { use, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const JoinEvent = () => {
    const navigate = useNavigate();
    const { axiosSecure } = useAxios();
    const { user, logoutUser, setLoading } = use(AuthContext);
    const [joinedEvents, setJoinedEvents] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axiosSecure(
                    `/events/joined?email=${user?.email}`
                );
                setJoinedEvents(data.data);
            } catch (err) {
                logoutUser();
                navigate("/sign-in");
                setLoading(false)
                Swal.fire({
                    title: `${err.status} Error!`,
                    text: `${err.response.data.message}`,
                    icon: "error",
                    position: "center",
                });
            }
        };
        if (user?.email) {
            getData();
        }
    }, [user, axiosSecure]);
    return <div>JoinEvent</div>;
};

export default JoinEvent;
