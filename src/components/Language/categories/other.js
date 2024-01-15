import React from "react";

import ItemCard from "../itemCard.js"

import mysqlBadge from '../../../Assets/badges/MySql.png';
import gitBadge from '../../../Assets/badges/Git.png';
import javascriptBadge from '../../../Assets/badges/Javascript.png';
import pythonBadge from '../../../Assets/badges/Python.png';

const Other = () => {
    const badgeData = [
        { name: 'MySql', image: mysqlBadge },
        { name: 'Git', image: gitBadge },
        { name: 'Javascript', image: javascriptBadge },
        { name: 'Python', image: pythonBadge },
    ];

    return (
        <div className="w-3/4 bg-blue-300 flex flex-col items-center justify-center p-2 mt-4 rounded-xl
        border-8 border-[#59A5D8]">
            <h2 className="text-4xl font-bold px-4 mb-2 text-white border-b-2 border-white">
                Other
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

export default Other;
