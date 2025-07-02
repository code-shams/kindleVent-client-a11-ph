import React from "react";
import {
    Trash2,
    Leaf,
    UtensilsCrossed,
    Heart,
    BookOpen,
    HandHeart,
    Scissors,
    Users,
} from "lucide-react";

const categories = [
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
    { name: "Clean Up", icon: Trash2 },
    { name: "Environment", icon: Leaf },
    { name: "Food Distribution", icon: UtensilsCrossed },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: BookOpen },
    { name: "Charity", icon: HandHeart },
    { name: "Skill Development", icon: Scissors },
    { name: "Community Service", icon: Users },
];

import Marquee from "react-fast-marquee";

const Categories = () => {
    return (
        <div className="mt-7 md:mt-14 overflow-hidden pri-font">
            <h1 className="text-lg md:text-3xl font-medium text-center px-2 md:px-10 pb-3 md:pb-5 w-full mx-auto drop-shadow-lg sec-font">
                Categories
            </h1>
            <Marquee
                speed={80}
                gradient={false}
                loop={0}
                pauseOnHover={false}
                pauseOnClick={false}
            >
                {[...categories, ...categories].map((cat, idx) => {
                    const IconComponent = cat.icon;
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center mx-2 min-w-30 min-h-24 sm:min-w-50 sm:min-h-30 pt-3 md:pt-5 bg-black/5 border-2 border-secondary/10 rounded-xl p-2 md:p-7"
                        >
                            <IconComponent className="size-7 sm:size-8" />
                            <span className="sm:text-xl pri-font mt-1 whitespace-nowrap">
                                {cat.name}
                            </span>
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default Categories;
