import React from "react";
import badgeData from '../../Assets/badges/index.js';

const Education = () => {
    return (
        <section className='w-full flex justify-center py-16' id="language">
            <div className='relative mx-12 w-[1250px] flex justify-center items-center bg-[#386FA4] rounded-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 left-0 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-lg'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                {/* Content */}
                <div className='flex flex-col justify-center items-center p-8 pt-12'>
                    <h2 className='px-4 text-4xl font-semibold text-white border-b-4 border-white mb-4 text-center'>languages & Frameworks</h2>
                    <div className='flex flex-wrap justify-evenly w-2/3'>
                        {badgeData.slice(0, 10).map(badge => (
                            <div key={badge.name} className='mb-4 mx-2 my-2 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                <img src={badge.image} alt={badge.name}
                                className='w-[75px] h-[75px]'/>
                                <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                            </div>
                        ))}
                    </div>
                    <h2 className='px-4 text-3xl font-semibold text-white border-b-4 border-white mb-4'>MERN Stack</h2>
                    <div className='flex flex-wrap justify-evenly w-2/3'>
                        {badgeData.slice(10, 14).map(badge => (
                            <div key={badge.name} className='mb-4 mx-2 my-2 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                <img src={badge.image} alt={badge.name}
                                className='w-[75px] h-[75px]'/>
                                <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 right-0 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-lg col-start-2 row-start-2'></div>
                </div>
            </div>
        </section>
    )
};

export default Education;