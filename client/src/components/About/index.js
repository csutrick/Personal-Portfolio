import React from "react";

const About = () => {
    return (
        <section className='w-full flex justify-center'>
            <div className='mx-12 mt-36 mb-16 w-[1250px] flex flex-col md:flex-row justify-center items-center'>
                <div className='flex flex-col max-w-[60%] md:max-w-[55%] p-4 order-2 md:order-1'>
                    <h1 className='font-black text-[#133C55] text-6xl lg:text-7xl text-center md:text-left drop-shadow-md'>
                        LEARN A<br />LITTLE{' '}
                        <span className='text-[#84D2F6]'>
                        ABOUT<br />
                        ME</span>
                    </h1>
                    <p className='mt-8 mb-4 text-[#133C55] font-semibold text-center md:text-left text-sm lg:text-base drop-shadow-md'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla esse accusantium libero provident consectetur, optio illum officiis ipsum nam aspernatur doloremque quos, enim maxime? Labore quisquam rem magnam voluptates eum sunt at. Ipsum doloremque ipsa placeat vitae perferendis, reprehenderit adipisci tenetur illo quis? Cum aperiam autem velit sequi officiis?
                    </p>
                    <div className='pt-2 md:pt-4 px-3 md:px-0 grid grid-cols-3 font-semibold tracking-wider text-sm md:text-base lg:text-xl w-[80%] border-t-4 border-[#84D2F6] mx-auto md:mx-0 drop-shadow-md'>
                        <h2 className='text-left text-[#84D2F6]'>Front End</h2>
                        <h2 className='text-center md:text-left text-[#84D2F6]'>Backend</h2>
                        <h2 className='text-right md:text-left text-[#84D2F6]'>Fullstack</h2>
                    </div>
                </div>
                <div className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full bg-gray-400 ml-8 border-8 border-[#84D2F6] order-1 md:order-2 drop-shadow-xl'></div>
            </div>
        </section>
    )
};

export default About;