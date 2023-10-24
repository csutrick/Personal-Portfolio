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
                {/* Content */}
                <div className='w-full flex flex-col md:flex-row items-center md:justify-evenly'>
                    <div className='w-[100%] md:w-[45%] flex flex-col items-center justify-center p-4 mr-4'>
                        <h2 className='px-4 text-center text-white font-bold text-5xl border-b-4 border-white'>Experience</h2>
                        <img src={webDevBadge} alt="Web Development Badge"
                        className='max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px]'
                        />
                        <p className='w-full text-white text-center font-bold'>
                            gjgsahfd jghasfdgja sfddhk sa dash dhsadg hja sh as dads asd
                            asdahksdb hasdhj ash hasdhas hkashk hkasd hkas sdkha sdhkas dhk
                            akhnjsdjkasdj jasdj jkasdjk jklasdjk hjknasdbhnj jasdj jasdn jas
                        </p>
                    </div>
                    <div className='bg-[#91E5F6] w-[100%] md:w-[45%] flex flex-col ml-4 p-4 rounded-lg'>
                        <div className='flex flex-wrap'>
                            <div className='flex flex-col w-1/3 md:w-1/2 items-center'>
                                <h3 className='px-4 border-b-2 border-white mb-3 text-white font-bold text-lg lg:text-xl whitespace-nowrap'>Languages</h3>
                                {badgeData.slice(0, 4).map(badge => (
                                    <div key={badge.name} className='mb-4 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                        <img src={badge.image} alt={badge.name}
                                        className='w-[75px] h-[75px]'/>
                                        <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col w-1/3 md:w-1/2 items-center'>
                                <h3 className='px-4 border-b-2 border-white mb-3 text-white font-bold text-lg lg:text-xl whitespace-nowrap'>MERN Stack</h3>
                                {badgeData.slice(4, 8).map(badge => (
                                    <div key={badge.name} className='mb-4 flex flex-col items-center hover:scale-105 duration-150 transition-all ease-in-out'>
                                        <img src={badge.image} alt={badge.name}
                                        className='w-[75px] h-[75px]'/>
                                        <h3 className='ml-2 font-bold text-white'>{badge.name}</h3>
                                    </div>
                                ))}
                            </div>
                            <div className='flex w-1/3 md:w-full justify-center'>
                                <h3 className='px-4 border-b-2 border-white mb-3 text-white font-bold text-lg lg:text-xl'>Other</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 right-0 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-2xl col-start-2 row-start-2'></div>
                </div>
            </div>
        </section>
    )
};

export default Experience;