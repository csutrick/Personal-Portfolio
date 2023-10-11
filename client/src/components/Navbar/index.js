import React from "react";
import { HiOutlineDocumentText } from 'react-icons/hi'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full flex justify-center backdrop-blur-md bg-[#0077B6]/40 z-10'>
            <div className='mx-12 w-[1250px] h-[50px] flex justify-between items-center'>
                <ul className='flex font-bold'>
                    {[
                        ['About', '/'],
                        ['Experience', '/'],
                        ['Projects', '/'],
                        ['Contact Me', '/'],
                    ].map(([title, link]) => (
                        <li href={link} className='px-2 mx-1 hover:scale-105 text-white hover:text-[#d6f1f7] border-b-2 border-b-transparent hover:border-[#d6f1f7]'>{title}</li>
                    ))}
                </ul>
                <div className='flex'>
                    <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                        className='relative group text-4xl mx-1 text-white hover:text-[#d6f1f7]'>
                        <HiOutlineDocumentText className='hover:scale-105'/>
                        <div className='absolute pointer-events-none -left-7 -bottom-[75px] z-10
                        text-white text-base text-bold whitespace-nowrap bg-[#84D2F6] rounded-lg p-2
                        transition-opacity opacity-0 group-hover:opacity-100 duration-1000'>
                            <h2 className='text-center'>Download<br />Resume</h2>
                            <div className='bg-[#84D2F6] absolute w-[25px] h-[25px] left-8 bottom-11 rotate-45'
                            style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
                        </div>
                    </a>
                    <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                        className='text-4xl mx-1 text-white hover:text-[#d6f1f7] hover:scale-105'>
                        <AiFillGithub /> 
                    </a>
                    <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                        className='text-4xl mx-1 text-white hover:text-[#d6f1f7] hover:scale-105'>
                        <AiFillLinkedin /> 
                    </a>
                    <a href="http://example.com/" target="_blank" rel="noopener noreferrer"
                        className='relative group text-4xl mx-1 text-white hover:text-[#d6f1f7]'>
                        <AiOutlineMail className='hover:scale-105'/> 
                        <div className='absolute pointer-events-none -left-8 -bottom-[50px] z-10
                        text-white text-base text-bold whitespace-nowrap bg-[#84D2F6] rounded-lg p-2
                        transition-opacity opacity-0 group-hover:opacity-100 duration-1000'>
                            <h2>Copy Email</h2>
                            <div className='bg-[#84D2F6] absolute w-[25px] h-[25px] left-9 bottom-5 rotate-45'
                            style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;