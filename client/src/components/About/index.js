import React from "react";
import { FaFileDownload } from 'react-icons/fa'
import resume from '../../Assets/resume.pdf';

const About = () => {
    return (
        <section className='w-full flex justify-center' id="about">
            <div className='mx-12 mt-36 mb-16 w-[1250px] flex flex-col md:flex-row justify-evenly items-center'>
                <div className='flex flex-col max-w-[60%] md:max-w-[55%] order-2 md:order-1'>
                    <h1 className='font-black text-[#133C55] text-6xl lg:text-7xl text-center md:text-left drop-shadow-md'>
                        LEARN A<br />LITTLE{' '}
                        <span className='text-[#84D2F6]'>
                        ABOUT<br />
                        ME</span>
                    </h1>
                    <p className='mt-8 mb-4 text-[#133C55] font-semibold text-center md:text-left text-sm lg:text-base drop-shadow-md'>
                    My name is Cole Sutrick, I am an aspiring full stack web developer based in Shakopee, Minnesota. I am excited to launch my career in web development after dedicating this last year to learning front-end and back-end programming languages and frameworks. I am very passionate about crafting intuitive user interfaces and finding innovative solutions to problems. I am eager to join a team where I can continue acquiring new skills, learn and make contributions to projects, and meet new people.
                    </p>
                    <div className='pt-2 md:pt-4 px-3 md:px-0 grid grid-cols-3 font-semibold tracking-wider text-sm md:text-base lg:text-xl w-[80%] border-t-4 border-[#84D2F6] mx-auto md:mx-0 drop-shadow-md'>
                        <h2 className='text-left text-[#84D2F6]'>Front End</h2>
                        <h2 className='text-center md:text-left text-[#84D2F6]'>Backend</h2>
                        <h2 className='text-right md:text-left text-[#84D2F6]'>Fullstack</h2>
                    </div>
                </div>
                <div className='order-1 md:order-2 flex flex-col items-center'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                    className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border-8 border-[#84D2F6] drop-shadow-xl mb-8'></img>
                    <a href={resume} download="cole-sutrick-resume" className='w-[50%]'>
                        <button className='group flex justify-center items-center w-[100%] px-6 py-4 mb-4 md:mb-0 bg-[#84D2F6] active:bg-[#59A5D8] border-4 border-[#84D2F6] hover:border-[#7ec8eb] text-white font-bold rounded-lg text-2xl
                        tracking-normal hover:tracking-widest hover:scale-105 duration-200 ease-out transition-all'><FaFileDownload 
                        className='min-w-[25px] min-h-[25px] mr-2 group-hover:animate-bounce'/>Resume</button>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default About;