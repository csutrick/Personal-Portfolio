import React from "react";

import Frontend from "./categories/frontend.js";
import Backend from "./categories/backend.js";
import Fullstack from "./categories/fullstack.js";
import Other from "./categories/other.js";

const Language = () => {
    return (
        <section id="language" className='w-full flex flex-col justify-center items-center'>
            <h2 className="px-8 py-2 mb-2 text-[#59A5D8] font-bold text-6xl border-b-4 border-[#59A5D8]">
                Languages
            </h2>
            <div className="w-full grid grid-cols-2 gap-4 justify-items-center">
                <Frontend />
                <Backend />
                <Fullstack />
                <Other />
            </div>
        </section>
    );
};

export default Language;
