import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CalendarDays, Save } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router";
import { addDays, isBefore, parse } from "date-fns";

const UpdateEvent = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();
    // ?edited State
    const [edited, setEdited] = useState(false);

    // ?Dynamic Event Id
    const eventId = useParams().id;
    // ?axios hook - adds jwt token to request headers
    const { axiosSecure } = useAxios();
    // ?local loading
    const [loading, setLoading] = useState(false);
    // ?Storing dynamic event data
    const [eventInfo, setEventInfo] = useState([]);
    //? Destructuring event data obj
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
        creatorEmail,
    } = eventInfo || {};

    // ?Datepicker state
    const [selectedDate, setSelectedDate] = useState("");
    const minDate = addDays(new Date(), 1);

    // ?Getting data from server and storing it to eventInfo state
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axiosSecure(`/event/details/${eventId}`);
                setEventInfo(data.data);
                const parsedDate = parse(
                    data.data?.eventDate,
                    "dd/MM/yyyy",
                    new Date()
                );
                setSelectedDate(parsedDate);
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

    // ?form submit handler fn
    const handleAddPost = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());

        for (const key in formObj) {
            if (!formObj[key]) {
                toast.error(`${key} is empty! Please fill that out.`);
                setLoading(false);
                return;
            }
        }
        if (form.eventType.value === "Select Event Type :") {
            toast.error(`Please Select Event Type!`);
            setLoading(false);
            return;
        }
        if (isBefore(selectedDate, new Date())) {
            toast.error(`Selected date must be in the future!`);
            setLoading(false);
            return;
        }
        setLoading(false);
        axiosSecure
            .put(`/event/update/${eventId}`, formObj)
            .then((data) => {
                setLoading(false);
                if (data?.data?.modifiedCount) {
                    toast.success("Event update successful!", {
                        icon: "success",
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: "dark",
                    });
                    form.reset();
                    navigate("/event/manage");
                } else if (data?.data?.modifiedCount === 0) {
                    Swal.fire({
                        text: "You didn't update anything",
                        icon: "warning",
                        timer: 2000,
                    });
                }
            })
            .catch((err) => {
                setLoading(false);
                Swal.fire({
                    text: "Something went wrong! Please try again.",
                    icon: "error",
                    timer: 1500,
                });
            });
    };
    return (
        <div className="contain pri-font">
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="pri-font bg-secondary/20 rounded-xl border-2 border-secondary/50 shadow-lg overflow-hidden p-0 py-3 md:px-7 drop-shadow-lg">
                    <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-full mx-auto drop-shadow-lg sec-font">
                        Edit Event
                    </h1>

                    {/* Form  */}
                    <div className="w-11/12 mx-auto">
                        <form
                            onChange={() => setEdited(true)}
                            onSubmit={handleAddPost}
                            className="pt-2 md:pt-5 pb-0"
                        >
                            {/* Username and email */}
                            <div className="flex flex-col items-center gap-2 md:gap-4 mb-2 md:mb-4">
                                <input
                                    type="text"
                                    name="creatorName"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0"
                                    readOnly
                                    value={user?.displayName}
                                />
                                <input
                                    type="text"
                                    name="creatorEmail"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0"
                                    readOnly
                                    value={user?.email}
                                />
                            </div>
                            {/* title and location */}
                            <div className="flex flex-col items-center gap-2 md:gap-4">
                                <input
                                    type="text"
                                    name="title"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0"
                                    defaultValue={title}
                                />
                                <input
                                    type="text"
                                    name="location"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0"
                                    defaultValue={location}
                                />
                            </div>

                            {/* Select Input and thumbnail*/}
                            <div className="flex flex-col items-center  gap-2 md:gap-4 my-2 md:my-4 relative">
                                <div className="relative w-full sm:w-9/12">
                                    <select
                                        name="eventType"
                                        defaultValue={eventType}
                                        className="cursor-pointer select select-neutral select-xs md:select-md block w-full rounded-md  border border-secondary focus:border-0 shadow-lg placeholder:font-medium focus:border-none focus:outline-accent "
                                    >
                                        <option
                                            value="Select Event Type :"
                                            disabled
                                        >
                                            Select Event Type :
                                        </option>
                                        <option value="Clean Up">
                                            Clean Up
                                        </option>
                                        <option value="Environment">
                                            Environment
                                        </option>
                                        <option value="Education">
                                            Education
                                        </option>
                                        <option value="Healthcare">
                                            Healthcare
                                        </option>
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
                                        <option value="Fundraising">
                                            Fundraising
                                        </option>
                                        <option value="Awareness Campaign">
                                            Awareness Campaign
                                        </option>
                                        <option value="Sports & Recreation">
                                            Sports & Recreation
                                        </option>
                                    </select>
                                </div>
                                <input
                                    type="url"
                                    name="thumbnail"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0"
                                    defaultValue={thumbnail}
                                />
                            </div>

                            {/* date and details */}
                            <div className="flex flex-col items-center  gap-2 sm:gap-4">
                                {/* date */}
                                <div className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-9/12 mx-auto sm:m-0">
                                    <span className="flex gap-2">
                                        Please select event date:
                                        <CalendarDays className="size-4"></CalendarDays>
                                    </span>

                                    <DatePicker
                                        selected={selectedDate}
                                        minDate={minDate}
                                        name="eventDate"
                                        dateFormat="dd/MM/yyyy"
                                        className="cursor-pointer"
                                        onChange={(date) => {
                                            setEdited(true);
                                            setSelectedDate(date);
                                        }}
                                    />
                                </div>

                                {/* details */}
                                <textarea
                                    name="details"
                                    cols="30"
                                    rows="10"
                                    defaultValue={details}
                                    className="h-40 w-full sm:w-9/12 mx-auto sm:m-0 resize-none rounded-md p-2 md:p-5  focus:outline-accent border bg-base-100 border-secondary focus:border-0 text-sm md:placeholder:text-base"
                                ></textarea>
                            </div>

                            {/* Submit button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={!edited}
                                    className="btn btn-primary btn-sm hover:bg-accent hover:border-none w-full sm:w-auto px-5 md:text-sm mt-4 hover:scale-105 rounded-full transition-all duration-300"
                                >
                                    <Save className="size-4" />
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateEvent;
