import { React, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import resume from '../../Assets/resume.pdf';

const navLinks = [
    { title: 'About', link:'about' },
    { title: 'Language', link:'language' },
    { title: 'Education', link:'education' },
    { title: 'Projects', link:'projects' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const smoothScroll = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        };
    };

    return (
        <nav className='fixed top-0 w-full flex justify-center backdrop-blur-md bg-[#0077B6]/40 z-20'>
            <div className='mx-12 w-[1250px] flex justify-between py-2'>
                <ul className='hidden md:flex md:items-center'>
                    {navLinks.map((navLinks, index) => (
                        <li key={index} href={'#' + navLinks.link} onClick={() => smoothScroll(navLinks.link)}
                        className='px-3 mx-2 font-bold text-lg tracking-wide whitespace-nowrap duration-200 ease-out transition-all
                        hover:scale-110 text-white hover:text-[#d6f1f7] active:text-[#59A5D8] border-b-2 border-transparent hover:border-[#d6f1f7] active:border-[#59A5D8]'>{navLinks.title}</li>
                    ))}
                </ul>
                <div className='flex flex-col md:hidden justify-between'>
                    <button onClick={toggleNavbar} className='text-white'>
                        {isOpen ? <AiOutlineClose className='text-4xl'/> : <HiMenu className='text-4xl'/>}
                    </button>
                    {isOpen && (
                        <ul className='flex flex-col'>
                        {navLinks.map((navLinks, index) => (
                            <li key={index} href={'#' + navLinks.link} onClick={() => smoothScroll(navLinks.link)}
                            className='pl-1 pr-4 py-2 font-bold text-white active:text-[#59A5D8] text-lg tracking-wide duration-200 ease-out transition-all'>{navLinks.title}</li>
                        ))}
                        </ul>
                    )}
                </div>
                <div className='flex h-min content-start'>
                    <a href={resume} download="cole-sutrick-resume"
                    className='flex items-center text-3xl mx-2 hover:scale-110 text-white hover:text-[#d6f1f7] active:text-[#59A5D8] duration-200 ease-in transition-all'>
                        <FaFileDownload />
                    </a>
                    <a href="https://github.com/csutrick" target="_blank" rel="noopener noreferrer"
                    className='flex items-center text-4xl mx-2 hover:scale-110 text-white hover:text-[#d6f1f7] active:text-[#59A5D8] duration-200 ease-out transition-all'>
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/cole-sutrick-b79b60263/" target="_blank" rel="noopener noreferrer"
                    className='flex items-center text-4xl mx-2 hover:scale-110 text-white hover:text-[#d6f1f7] active:text-[#59A5D8] duration-200 ease-out transition-all'>
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;