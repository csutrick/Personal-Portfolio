import React from "react";
import webDevBadge from "../../Assets/full-stack-web-development-certificate-coding-boot-camp.png";
import badgeData from '../../Assets/badges/index.js';

const Education = () => {
    return (
        <section className='w-full flex justify-center py-16' id="education">
            <div className='relative mx-12 w-[1250px] h-[300px] flex justify-center items-center bg-[#386FA4] rounded-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 left-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-lg'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>

                {/* Content */}
                <h1 className='text-white font-bold text-6xl'>Education</h1>
                
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 right-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-lg col-start-2 row-start-2'></div>
                </div>
            </div>
        </section>
    )
};

export default Education;