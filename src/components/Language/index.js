import React from "react";

import Frontend from "./categories/frontend.js";
import Backend from "./categories/backend.js";
import Fullstack from "./categories/fullstack.js";
import Other from "./categories/other.js";

const Language = () => {
    return (
        <section id="language" 
        className='w-full flex flex-col justify-center items-center p-4 
        bg-[#84D2F6] border-8 border-[#59A5D8] rounded-xl drop-shadow-md'>
            <h2 className="px-8 pb-2 mb-2 text-white font-bold text-6xl 
            whitespace-nowrap border-b-4 border-white drop-shadow-md">
                Languages
            </h2>
            <div className="w-full flex flex-col md:flex-row flex-nowrap space-x-0 md:space-x-4">
                <Backend />
                <Frontend />
                <Other />
            </div>
            <Fullstack />
        </section>
    );
};

export default Language;
