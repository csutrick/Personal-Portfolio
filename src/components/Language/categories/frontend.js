import React from "react";

import ItemCard from "../itemCard.js"

import htmlBadge from '../../../Assets/badges/HTML.png';
import CssBadge from '../../../Assets/badges/CSS.png';
import bootstrapBadge from '../../../Assets/badges/Bootstrap.png';
import tailwindsBadge from '../../../Assets/badges/Tailwinds.png';
import reactBadge from '../../../Assets/badges/React.png';

const Frontend = () => {
    const badgeData = [
        { name: 'HTML', image: htmlBadge },
        { name: 'CSS', image: CssBadge },
        { name: 'Bootstrap', image: bootstrapBadge },
        { name: 'Tailwinds', image: tailwindsBadge },
        { name: 'React', image: reactBadge },
    ];

    return (
        <div className="w-full md:w-1/3 bg-gray-100 flex flex-col items-center justify-start mt-4 rounded-xl
        border-8 border-[#59A5D8] drop-shadow-md">
            <h2 className="text-4xl font-bold px-4 mb-2 text-[#59A5D8] 
            whitespace-nowrap border-b-2 border-[#59A5D8] drop-shadow-md">
                Front-End
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

export default Frontend;
