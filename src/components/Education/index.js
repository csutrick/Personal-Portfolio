import React from "react";
import webDevBadge from "../../Assets/full-stack-web-development-certificate-coding-boot-camp.png";

const Education = () => {
    return (
        <section className='w-full flex justify-center' id="education">
            <div className='relative w-[1250px] flex justify-center items-center bg-[#386FA4] rounded-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 left-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-lg'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                {/* Content */}
                <div className='flex flex-col md:flex-row flex-wrap justify-center items-center p-8 pt-12'>
                    <img src={webDevBadge} alt="Web Development Badge"
                    className='w-[300] h-[300px] lg:w-[350] lg:h-[350px] mr-2 lg:mr-4'
                    />
                    <div className='flex flex-col justify-center items-center w-2/3 md:w-1/3 ml-2 lg:ml-4'>
                        <h2 className='px-4 text-4xl font-semibold text-white border-b-4 border-white mb-4 text-center'>Education</h2>
                        <p className='text-center font-bold text-white mb-2'>
                            I attended the University of Minnesota's Full stack web development course from March to August of 2023.
                            Within the class I developed and learned skills to help me not only code, but to problem solve and work within a group on projects. 
                        </p>
                        <a href="https://www.credly.com/badges/b457e4bf-794c-4b33-9270-182d7382b2cc/public_url" target="_blank" rel="noopener noreferrer"
                        className='text-sm font-bold text-[#91E5F6] hover:text-[#84D2F6] active:text-[#91E5F6] hover:tracking-widest hover:underline hover:scale-110 duration-200 ease-out transition-all'>View Credly Badge</a>
                    </div>
                </div>
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