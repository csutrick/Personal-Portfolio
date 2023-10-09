import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillSlackCircle } from 'react-icons/ai'

const socialLinks = [
    { Icon: AiFillGithub, link: 'http://example.com/' },
    { Icon: AiFillLinkedin, link: 'http://example.com/' },
    { Icon: AiFillYoutube, link: 'http://example.com/' },
    { Icon: AiFillSlackCircle, link: 'http://example.com/' },
];

const Footer = () => {
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
                        {[
                            ['About', '/'],
                            ['Resume', '/'],
                            ['Projects', '/'],
                            ['Contact Me', '/'],
                        ].map(([title, link]) => (
                            <li href={link} className='mx-4 text-center hover:scale-110 duration-200 ease-out transition-all cursor-pointer hover:text-[#59A5D8]'>{title}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-center border-t-4 border-[#386FA4] text-[#386FA4] font-semibold'>
                    <h3 className='text-sm'>Thank you for veiwing my portfolio</h3>
                    <h3 className='text-sm'>Feel free to checkout the portfolio code below</h3>
                    <a href="https://example.com"
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