import React from "react";
import webDevBadge from "../../Assets/full-stack-web-development-certificate-coding-boot-camp.png";

const Bootcamp = () => {
    return (
        <section className='w-full flex justify-center'>
            <div className='relative p-8 mx-12 my-16 w-[1250px] flex bg-[#386FA4] rounded-2xl justify-center drop-shadow-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 left-0 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-2xl'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                {/* Content */}
                <div className='flex justify-center items-center row-start-2 col-start-1 col-end-5'>
                    <a className='w-[300px] h-[300px]'
                        href="https://www.credly.com/badges/b457e4bf-794c-4b33-9270-182d7382b2cc" target="_blank" rel="noopener noreferrer">
                        <img
                            className='hover:scale-[103%] drop-shadow-md hover:drop-shadow-xl hover:brightness-105 transition-all duration-100 ease-in-out'
                            src={webDevBadge}
                            alt="Web Development Badge"/>
                    </a>
                    <div className='flex flex-col font-bold justify-center items-center text-white ml-8'>
                        <div className='text-center border-b-2 border-white drop-shadow-md'>
                            <h1 className='text-2xl px-2'>Bootcamp</h1>
                        </div>
                        <p className='w-[350px] text-center drop-shadow-md'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, 
                            fuga. Iure veniam rerum dolore quibusdam nisi blanditiis neque molestias unde!
                        </p>
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

export default Bootcamp;