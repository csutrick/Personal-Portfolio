import React from 'react';

import OfferForm from './offerForm';

const Contact = () => {
    return (
        <section className='bg-white flex w-full justify-center pt-16 pb-32'>
            <div className='mx-12 flex flex-col w-[1250px] p-8 px-16 relative justify-center items-center
            bg-[#386FA4] rounded-xl drop-shadow-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 left-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-xl'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>

                <h2 className='font-black text-4xl md:text-6xl md:mb-4 px-6
                border-b-4 border-white text-white whitespace-nowrap'>
                    Contact Me
                </h2>
                <OfferForm />

                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 top-0 right-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-l-lg col-start-2 row-start-1 justify-self-end self-end'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-t-lg col-start-1 row-start-2 justify-self-end self-end'></div>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-tl-lg rounded-br-xl col-start-2 row-start-2'></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;