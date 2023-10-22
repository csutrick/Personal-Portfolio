import React from "react";
import { AiFillGithub } from 'react-icons/ai'
import images from '../../Assets/project-thumbnails/index.js';

const Projects = () => {
    return (
        <section className='w-full flex justify-center py-16 ' id="projects">
            <div className='mx-12 w-[1250px] flex flex-col md:flex-row items-center justify-between flex-wrap'>
                {/* Hero Project */}
                <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                className='group relative flex h-[400px] w-[100%] mb-12 transition-all duration-300 ease-in-out
                rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
                bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm' style={{ backgroundImage: `url(${images.heroProject})` }}>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-300 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 1</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer" className='absolute bottom-0 right-0 p-2'>
                        <AiFillGithub className='text-5xl hover:scale-[115%] text-[#84D2F6] group-hover:text-[#6bce70] transition-all duration-300 ease-in-out'/>
                    </a>
                </a>
                {/* Project 2 */}
                <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                className='group relative flex h-[300px] w-[100%] md:w-[48%] mb-12 transition-all duration-300 ease-in-out
                rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
                bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm' style={{ backgroundImage: `url(${images.project1})` }}>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-300 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 2</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer" className='absolute bottom-0 right-0 p-2'>
                        <AiFillGithub className='text-5xl hover:scale-[115%] text-[#84D2F6] group-hover:text-[#6bce70] transition-all duration-300 ease-in-out'/>
                    </a>
                </a>
                {/* Project 3 */}
                <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                className='group relative flex h-[300px] w-[100%] md:w-[48%] mb-12 transition-all duration-300 ease-in-out
                rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
                bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm' style={{ backgroundImage: `url(${images.project2})` }}>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-300 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 3</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer" className='absolute bottom-0 right-0 p-2'>
                        <AiFillGithub className='text-5xl hover:scale-[115%] text-[#84D2F6] group-hover:text-[#6bce70] transition-all duration-300 ease-in-out'/>
                    </a>
                </a>
                {/* Project 4 */}
                <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                className='group relative flex h-[300px] w-[100%] md:w-[48%] transition-all duration-300 ease-in-out
                rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
                bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm' style={{ backgroundImage: `url(${images.project3})` }}>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-300 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 4</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer" className='absolute bottom-0 right-0 p-2'>
                        <AiFillGithub className='text-5xl hover:scale-[115%] text-[#84D2F6] group-hover:text-[#6bce70] transition-all duration-300 ease-in-out'/>
                    </a>
                </a>
                {/* Project 5 */}
                <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                className='group relative flex h-[300px] w-[100%] md:w-[48%] transition-all duration-300 ease-in-out
                rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
                bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm' style={{ backgroundImage: `url(${images.project4})` }}>
                    <div className='absolute bottom-5 -left-1 p-2 pl-3 bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-300 ease-in-out rounded-r-lg max-w-[250px]'>
                        <h2 className='font-bold text-white text-lg'>Project 5</h2>
                        <h3 className='text-sm text-[#133C55]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint?</h3>
                    </div>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer" className='absolute bottom-0 right-0 p-2'>
                        <AiFillGithub className='text-5xl hover:scale-[115%] text-[#84D2F6] group-hover:text-[#6bce70] transition-all duration-300 ease-in-out'/>
                    </a>
                </a>
            </div>
        </section>
    )
};

export default Projects;