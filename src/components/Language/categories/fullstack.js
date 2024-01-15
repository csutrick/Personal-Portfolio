import React from "react";

import ItemCard from "../itemCard.js"

import mongoBadge from '../../../Assets/badges/MongoDB.png';
import expressBadge from '../../../Assets/badges/ExpressJS.png';
import reactBadge from '../../../Assets/badges/React.png';
import nodeBadge from '../../../Assets/badges/Node.png';

const Fullstack = () => {
    const badgeData = [
        { name: 'MongoDB', image: mongoBadge },
        { name: 'ExpressJS', image: expressBadge },
        { name: 'React', image: reactBadge },
        { name: 'Node', image: nodeBadge },
    ];

    return (
        <div className="w-3/4 bg-blue-300 flex flex-col items-center justify-center p-2 mt-4 rounded-xl
        border-8 border-[#59A5D8]">
            <h2 className="text-4xl font-bold px-4 mb-2 text-white border-b-2 border-white">
                Full Stack
            </h2>
            <div className="flex flex-wrap justify-center">
                {badgeData.map((badge, index) => (
                    <ItemCard key={index}
                        image={badge.image}
                        name={badge.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Fullstack;
