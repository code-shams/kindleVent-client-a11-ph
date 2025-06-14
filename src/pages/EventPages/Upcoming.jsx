import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const Upcoming = () => {
    const { axiosSecure } = useAxios();
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axiosSecure.get("/event/upcoming").then((data) => {
            console.log(data).catch((err) => console.log(err));
        });
    }, []);
    return <div>Upcoming</div>;
};

export default Upcoming;
