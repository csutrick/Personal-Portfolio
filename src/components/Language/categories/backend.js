import React from "react";

import ItemCard from "../itemCard.js"

import nodeBadge from '../../../Assets/badges/Node.png';
import expressBadge from '../../../Assets/badges/ExpressJS.png';
import graphqlBadge from '../../../Assets/badges/GraphQl.png';
import apolloBadge from '../../../Assets/badges/Apollo.png';

const Backend = () => {
    const badgeData = [
        { name: 'Node', image: nodeBadge },
        { name: 'ExpressJS', image: expressBadge },
        { name: 'GraphQl', image: graphqlBadge },
        { name: 'Apollo', image: apolloBadge },
    ];

    return (
        <div className="w-full md:w-1/3 bg-gray-100 flex flex-col items-center justify-start p-2 mt-4 rounded-xl
        border-8 border-[#59A5D8] drop-shadow-md">
            <h2 className="text-4xl font-bold px-4 mb-2 text-[#59A5D8] 
            whitespace-nowrap border-b-2 border-[#59A5D8] drop-shadow-md">
                Back-End
            </h2>
            <div className="w-full flex flex-wrap justify-evenly space-x-2 space-y-2">
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

export default Backend;
