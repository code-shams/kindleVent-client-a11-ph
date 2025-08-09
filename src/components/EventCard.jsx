import React from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import {
    Calendar1,
    LucideSparkle,
    MapPin,
    LucideTag,
    MoveRight,
    Pencil,
} from "lucide-react";

const EventCard = ({ eventInfo, manage }) => {
    const {
        _id,
        creatorName,
        title,
        location,
        eventType,
        thumbnail,
        eventDate,
        creatorPhotoURL,
    } = eventInfo || {};

    const isoDate = new Date(eventDate);
    const date = format(isoDate, "dd/MM/yyyy");

    return (
        <div className="flex flex-col rounded-lg group w-auto shadow-lg scale-95 hover:scale-100 hover:shadow-2xl transition-all duration-300 delay-100 overflow-hidden">
            {/* Image and blur overlay container */}
            <div className="relative border-2 border-secondary/20 border-b-0 rounded-b-none rounded-lg overflow-hidden">
                <img src={thumbnail} className="w-full" alt="" />
                <div className="absolute rounded-lg inset-0 bg-black/10 backdrop-blur-xs translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-100 ease-in-out" />
            </div>
            {/* Information Container */}
            <div className="flex-1 flex flex-col bg-base-100/30 group-hover:bg-base-100/0 border-2 border-secondary/20 transition-all duration-300 delay-100 p-2 space-y-1 overflow-hidden relative rounded-b-lg">
                {/* Event Creator Info & eventType */}
                <div className="flex justify-between gap-5">
                    <div className="flex items-center gap-1 ">
                        <img
                            src={creatorPhotoURL}
                            className="h-6 rounded-full"
                            alt=""
                        />
                        <span className="text-xs">{creatorName}</span>
                    </div>
                    <span className="flex items-center justify-center gap-1 text-xs p-1 px-2 rounded-full min-w-max h-max bg-secondary/50 border-0 text-center">
                        <LucideTag className="size-3"></LucideTag>
                        {eventType}
                    </span>
                </div>
                {/* Title */}
                <h1 className="text-sm sm:text-base font-medium flex gap-1">
                    <LucideSparkle className="size-4 mt-1"></LucideSparkle>
                    {title}
                </h1>
                {/* Location & Date */}
                <div className="flex justify-between gap-5">
                    <span className="flex items-center gap-1 text-xs">
                        <MapPin className="size-4 mt-1" />
                        {location}
                    </span>
                    <span className="flex sm:items-center gap-1 text-xs">
                        <Calendar1 className="size-3 mt-1 sm:mt-0" />
                        {date}
                    </span>
                </div>
                <div className="flex justify-center h-full my-3">
                    {manage ? (
                        <Link
                            to={`/event/update/${_id}`}
                            className="mt-auto btn btn-primary btn-xs sm:btn-sm border-none hover:bg-accent hover:scale-103 hover:-translate-y-1 hover:text-black transition"
                        >
                            <Pencil className="size-5" />
                        </Link>
                    ) : (
                        <Link
                            to={`/event/details/${_id}`}
                            className="mt-auto btn btn-primary btn-xs sm:btn-sm border-none hover:bg-accent hover:scale-103 hover:-translate-y-1 hover:text-black transition rounded-full font-normal"
                        >
                            View Details
                            <MoveRight className="size-4" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
