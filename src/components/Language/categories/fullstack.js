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
        <div className="w-full bg-gray-100 flex flex-col items-center justify-center p-2 mt-4 rounded-xl
        border-8 border-[#59A5D8] drop-shadow-md">
            <h2 className="text-4xl font-bold px-4 mb-2 text-[#59A5D8] 
            whitespace-nowrap border-b-2 border-[#59A5D8] drop-shadow-md">
                Full Stack
            </h2>
            <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
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
