import React, { use, useState } from "react";
import { CalendarDays, FilePlus } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router";

const CreateEvent = () => {
    const { axiosDef } = useAxios();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const minDate = new Date(); //? minimum selected data for datepicker
    const [selectedDate, setSelectedDate] = useState(() => {
        const tomDate = new Date();
        tomDate.setDate(tomDate.getDate() + 1);
        return tomDate; //? initial selected value is already tomorrow
    });
    minDate.setDate(minDate.getDate() + 1); //? minimum date is also tomorrow

    const { user } = use(AuthContext);
    const handleAddPost = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        formObj.creatorName = user.displayName;
        formObj.creatorEmail = user.email;
        formObj.creatorPhotoURL = user.photoURL;
        formObj.participants = [];
        for (const key in formObj) {
            if (key !== "participants") {
                if (!formObj[key]) {
                    toast.error(`${key} is empty! Please fill that out.`);
                    setLoading(false);
                    return;
                }
            }
        }
        if (form.eventType.value === "Select Event Type :") {
            toast.error(`Please Select Event Type!`);
            setLoading(false);
            return;
        }
        axiosDef.post("/event/create", formObj).then((data) => {
            setLoading(false);
            if (data?.data?.result?.insertedId) {
                toast.success("Successfully Added a Post", {
                    icon: "success",
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    theme: "dark",
                });
                form.reset();
                navigate("/event/upcoming");
            } else {
                Swal.fire({
                    text: "Please try again!",
                    icon: "error",
                    timer: 1500,
                });
            }
        });
    };
    return (
        <div className="contain pri-font">
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="pri-font bg-secondary/20 rounded-xl border-2 border-secondary/50 shadow-lg overflow-hidden p-0 py-3 md:px-7 drop-shadow-lg">
                    <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-full mx-auto drop-shadow-lg sec-font">
                        Create an Event
                    </h1>

                    {/* Form  */}
                    <div className="w-11/12 mx-auto">
                        <form
                            onSubmit={handleAddPost}
                            className="pt-2 md:pt-5 pb-0"
                        >
                            {/* Username and email */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 md:mb-6">
                                <input
                                    type="text"
                                    name="creatorName"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    readOnly
                                    value={user.displayName}
                                />
                                <input
                                    type="text"
                                    name="creatorEmail"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    readOnly
                                    value={user.email}
                                />
                            </div>
                            {/* title and location */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <input
                                    type="text"
                                    name="title"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Title"
                                />
                                <input
                                    type="text"
                                    name="location"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Location"
                                />
                            </div>

                            {/* Select Input and thumbnail*/}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6 relative">
                                <div className="relative w-full sm:w-1/2">
                                    <select
                                        name="eventType"
                                        defaultValue="Select Event Type :"
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
                                    type="text"
                                    name="thumbnail"
                                    className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Event Thumbnail"
                                />
                            </div>

                            {/* date and details */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                {/* date */}
                                <div className="input input-xs md:input-md rounded-md  focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0">
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
                                        onChange={(date) =>
                                            setSelectedDate(date)
                                        }
                                    />
                                </div>

                                {/* details */}
                                <textarea
                                    name="details"
                                    cols="30"
                                    rows="10"
                                    placeholder={"Details"}
                                    className="h-40 w-full sm:w-1/2 mx-auto sm:m-0 resize-none rounded-md p-2 md:p-5  focus:outline-accent border bg-base-100 border-secondary focus:border-0 text-sm md:placeholder:text-base"
                                ></textarea>
                            </div>

                            {/* Submit button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm hover:bg-accent hover:border-none w-full sm:w-auto px-5 md:text-sm mt-4 hover:scale-105 rounded-full transition-all duration-300"
                                >
                                    <FilePlus className="size-4"></FilePlus>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateEvent;
