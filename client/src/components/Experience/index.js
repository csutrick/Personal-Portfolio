import React from "react";
import webDevBadge from "../../Assets/full-stack-web-development-certificate-coding-boot-camp.png";
import badgeData from '../../Assets/badges/index.js';

const Experience = () => {
    return (
        <section className='w-full flex justify-center' id="experience">
            <div className='relative p-14 mx-12 my-16 w-[1250px] bg-[#386FA4] rounded-2xl drop-shadow-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 left-0 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-2xl'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 left-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-xl'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                {/* Content */}
                <div className='w-full flex flex-col items-center'>
                    <div className='flex w-full flex-col items-center justify-center mb-2'>
                        <h2 className='px-4 mb-4 w-min text-center text-white text-5xl border-b-4 border-white font-black tracking-wide'>Experience</h2>
                        <div className='flex flex-col md:flex-row  w-full justify-evenly items-center'>
                            <img src={webDevBadge} alt="Web Development Badge"
                                    className='w-[350] h-[350px] md:mr-4'
                            />
                            <div className='ml-4 flex flex-col w-2/3 md:w-1/3 items-center'>
                                <h3 className='text-center text-4xl flex w-min font-bold text-white px-4 border-b-2 border-white whitespace-nowrap md:mb-4'>University of<br />Minnesota</h3>
                                <p className='text-center font-bold text-white text-lg'>
                                    das khdh sadkhsdha sddb dkasd hba sdkh bakhjdb
                                    asdasd asds asd a adasd a dsasdasd a dsdad aa sddb
                                    asda asdas dasda sdasdsa asdasd sas a a sadsdaawd a 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='mb-4 font-bold px-4 border-b-2 border-white text-white text-2xl'>Languages & Frameworks</h3>
                        <div className='mb-4 flex flex-wrap items-center justify-evenly'>
                            {badgeData.slice(0, 10).map(badge => (
                                <div key={badge.name} className='mx-4 mb-2 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                    <img src={badge.image} alt={badge.name}
                                    className='w-[75px] h-[75px]'/>
                                    <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                                </div>
                            ))}
                        </div>
                        <h3 className='mb-4 font-bold px-4 border-b-2 border-white text-white text-2xl'>MERN Stack</h3>
                        <div className='flex flex-wrap items-center justify-evenly'>
                            {badgeData.slice(10, 14).map(badge => (
                                <div key={badge.name} className='mx-4 mb-2 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                    <img src={badge.image} alt={badge.name}
                                    className='w-[75px] h-[75px]'/>
                                    <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 right-0 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-2xl col-start-2 row-start-2'></div>
                </div>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 right-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-xl col-start-2 row-start-2'></div>
                </div>
            </div>
        </section>
    )
};

export default Experience;