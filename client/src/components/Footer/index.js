import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

const socialLinks = [
    { Icon: AiFillGithub, link: 'https://github.com/csutrick' },
    { Icon: AiFillLinkedin, link: 'https://www.linkedin.com/in/cole-sutrick-b79b60263/' },
    { Icon: AiFillYoutube, link: 'https://www.youtube.com/channel/UCoREmaPUWTljzYHakFa9PgQ' },
];

const footerLinks = [
    { title: 'About', link:'about' },
    { title: 'Experience', link:'experience' },
    { title: 'Projects', link:'projects' },
    { title: 'Contact Me', link:'contact' },
];

const Footer = () => {
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
        <footer className='flex w-full bg-[#84D2F6] justify-center pt-16 pb-16'>
            <div className='mx-12 flex flex-col justify-center items-center w-[1250px] p-8
            bg-white rounded-xl'>
                <div className='flex px-4 border-b-4 border-[#386FA4]'>
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                        className='text-[#386FA4] hover:text-[#59A5D8] text-4xl mx-2
                        hover:scale-110 duration-200 ease-out transition-all'>
                            <social.Icon />
                        </a>
                    ))}
                </div>
                <div className='my-6'>
                    <ul className='flex items-center font-bold text-[#386FA4]'>
                        {footerLinks.map((footerLinks, index) => (
                            <li key={index} href={'#' + footerLinks.link} onClick={() => smoothScroll(footerLinks.link)}
                            className='mx-4 text-center hover:scale-110 duration-200 ease-out transition-all cursor-pointer hover:text-[#59A5D8]'>{footerLinks.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-center border-t-4 border-[#386FA4] text-[#386FA4] font-semibold'>
                    <h3 className='text-sm'>Thank you for veiwing my portfolio</h3>
                    <h3 className='text-sm'>Feel free to checkout the portfolio code below</h3>
                    <a href="https://github.com/csutrick/personal-portfolio"
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:underline hover:scale-110 duration-200 ease-out transition-all text-[#386FA4] hover:text-[#59A5D8] tracking-normal hover:tracking-wider"
                    >
                        Portfolio Code
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;