import React from "react";

const Projects = () => {
    return (
        <section className='w-full flex justify-center py-16'>
            <div className='mx-12 w-[1250px] flex flex-col md:grid grid-cols-6 grid-rows-3 gap-5'>
                {/* Project 1 */}
                <div className='bg-gray-200 p-4 col-start-1 col-end-5 relative drop-shadow-md hover:drop-shadow-2xl
                group rounded-xl border-[#84D2F6] hover:border-[#59A5D8] border-8 h-[300px] hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-200 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 1</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                </div>
                {/* Project 2 */}
                <div className='bg-gray-200 p-4 col-start-5 col-end-7 row-start-1 row-end-3 relative drop-shadow-md hover:drop-shadow-2xl
                group rounded-xl border-[#84D2F6] hover:border-[#59A5D8] border-8 h-[300px] md:h-auto hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-200 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 2</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                </div>
                {/* Project 3 */}
                <div className='bg-gray-200 p-4 col-start-3 col-end-5 row-start-2 row-end-3 relative drop-shadow-md hover:drop-shadow-2xl
                group rounded-xl border-[#84D2F6] hover:border-[#59A5D8] border-8 h-[300px] hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-200 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 3</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                </div>
                {/* Project 4 */}
                <div className='bg-gray-200 p-4 col-start-1 col-end-3 row-start-2 row-end-4 relative drop-shadow-md hover:drop-shadow-2xl
                group rounded-xl border-[#84D2F6] hover:border-[#59A5D8] border-8 h-[300px] md:h-auto hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-200 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 4</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                </div>
                {/* Project 5 */}
                <div className='bg-gray-200 p-4 col-start-3 col-end-7 relative drop-shadow-md hover:drop-shadow-2xl
                group rounded-xl border-[#84D2F6] hover:border-[#59A5D8] border-8 h-[300px] hover:scale-[1.02] transition-all duration-200 ease-in-out'>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-200 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 5</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;