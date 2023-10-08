import React from 'react';

import OfferForm from './offerForm';

const Contact = () => {
    return (
        <section className='bg-white flex w-full justify-center pt-16 pb-32'>
            <div className='mx-12 flex justify-center w-[1250px] p-8 relative
            bg-[#386FA4] rounded-xl drop-shadow-lg'>
                {/* Decoration */}
                <div className='absolute grid grid-rows-2 grid-cols-2 gap-2 bottom-0 left-0 -rotate-90 drop-shadow-md'>
                    <div className='bg-[#84D2F6] h-[75px] w-[75px] rounded-br-lg rounded-tl-xl'></div>
                    <div className='bg-[#91E5F6] h-[50px] w-[50px] rounded-b-lg'></div>
                    <div className='bg-[#59A5D8] h-[50px] w-[50px] rounded-r-lg'></div>
                </div>
                <OfferForm />
                <div className='flex flex-col items-center ml-8 mt-1 w-[425px] drop-shadow-md'>
                    <h2 className='justify-end px-8 mb-3
                    border-b-4 border-white text-white text-6xl font-black'>
                        Contact Me
                    </h2>
                    <p className='font-bold text-white pl-2'>
                        Feel free to reach out to me on any socials on this website. Or send me a message though this form. Please include<br />
                        - Personal Name / Company Name<br />
                        - Message on why your reaching out<br />
                        - A way to contact you back
                    </p>
                </div>
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