import React, { use, useState } from "react";
import { FilePlus } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../components/Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = () => {
    const [loading, setLoading] = useState(false);

    const [selectedDate, setSelectedDate] = useState(new Date());

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
        setLoading(false);
        console.log(formObj);
        // fetch("https://cozy-nest-server.vercel.app/post", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(formObj),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setLoading(false);
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 text: "Successfully Added a Post",
        //                 icon: "success",
        //                 timer: 1500,
        //             });
        //             form.reset();
        //         } else {
        //             Swal.fire({
        //                 text: "Please try again!",
        //                 icon: "error",
        //                 timer: 1500,
        //             });
        //         }
        //     });
    };
    return (
        <div className="contain pri-font">
            {loading ? (
                <Loader></Loader>
            ) : (
                <div className="pri-font bg-secondary/20 rounded-xl border-2 border-secondary/50 shadow-lg overflow-hidden p-0 pt-3 md:px-7 md:py-3 drop-shadow-lg">
                    <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 w-full mx-auto drop-shadow-lg sec-font">
                        Create an Event
                    </h1>

                    {/* Form  */}
                    <div>
                        <form
                            onSubmit={handleAddPost}
                            className="pt-2 md:pt-5 pb-0"
                        >
                            {/* Username and email */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 md:mb-6">
                                <input
                                    type="text"
                                    name="creatorName"
                                    // className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    readOnly
                                    value={user.displayName}
                                />
                                <input
                                    type="text"
                                    name="creatorEmail"
                                    className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    readOnly
                                    value={user.email}
                                />
                            </div>
                            {/* title and location */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <input
                                    type="text"
                                    name="title"
                                    className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Title"
                                />
                                <input
                                    type="text"
                                    name="location"
                                    className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Location"
                                />
                            </div>

                            {/* Select Input */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-2 md:my-6 relative">
                                <div className="relative w-full sm:w-1/2">
                                    <select
                                        name="eventType"
                                        defaultValue="Select Event Type :"
                                        className="cursor-pointer select select-neutral block w-full rounded-md bg-black/10 backdrop-blur-lg border border-secondary focus:border-0 shadow-lg placeholder:font-medium focus:border-none focus:outline-accent sm:text-sm"
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
                                        <option value="Tree Plantation">
                                            Tree Plantation
                                        </option>
                                        <option value="Donation Drive">
                                            Donation Drive
                                        </option>
                                        <option value="Community Service">
                                            Community Service
                                        </option>
                                        <option value="Environmental Awareness">
                                            Environmental Awareness
                                        </option>
                                        <option value="Food Drive">
                                            Food Drive
                                        </option>
                                        <option value="Educational Workshop">
                                            Educational Workshop
                                        </option>
                                        <option value="Fundraising">
                                            Fundraising
                                        </option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    name="thumbnail"
                                    className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0"
                                    placeholder="Event Thumbnail"
                                />
                            </div>
                            <div className="input input-xs md:input-md rounded-md bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 shadow-lg w-full sm:w-1/2 mx-auto sm:m-0 ">
                                <span>Please select event date: </span>
                                <DatePicker
                                    selected={selectedDate}
                                    showIcon
                                     minDate={(new Date())}
                                    className="cursor-pointer"
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </div>

                            {/* Details Text Area */}
                            <div>
                                <textarea
                                    name="details"
                                    cols="30"
                                    rows="10"
                                    placeholder={"Details"}
                                    className="h-40 w-full resize-none rounded-md p-5 bg-black/10 backdrop-blur-lg focus:outline-accent border border-secondary focus:border-0 mt-5"
                                ></textarea>
                            </div>
                            <div className="text-center ">
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary hover:bg-accent hover:border-none w-full sm:w-auto px-5 md:text-lg mt-2 hover:scale-105 rounded-full transition-all duration-300"
                                >
                                    <FilePlus></FilePlus>
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
