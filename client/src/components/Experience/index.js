import React from "react";
import webDevBadge from "../../Assets/full-stack-web-development-certificate-coding-boot-camp.png";

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
                <div className='w-full flex justify-evenly'>
                    <div className='w-[35%] flex flex-col items-center justify-center p-4 mr-4'>
                        <h2 className='px-4 text-center text-white font-bold text-5xl border-b-4 border-white'>Experience</h2>
                        <img src={webDevBadge} alt="Web Development Badge"
                        className=''
                        />
                        <p className='w-full text-white text-center font-bold'>
                            gjgsahfd jghasfdgja sfddhk sa dash dhsadg hja sh as dads asd
                            asdahksdb hasdhj ash hasdhas hkashk hkasd hkas sdkha sdhkas dhk
                            akhnjsdjkasdj jasdj jkasdjk jklasdjk hjknasdbhnj jasdj jasdn jas
                        </p>
                    </div>
                    <div className='w-[45%] flex flex-col items-center justify-center ml-4'>
                        <div className='bg-white w-[100%] h-[200px] mb-4 rounded-lg'>Languages</div>
                        <div className='bg-white w-[100%] h-[200px] mb-4 rounded-lg'>Languages</div>
                        <div className='bg-white w-[100%] h-[200px] rounded-lg'>Languages</div>
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