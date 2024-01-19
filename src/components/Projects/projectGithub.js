import React from "react";

import { AiFillGithub } from 'react-icons/ai';

const ProjectGithub = ({ githubURL }) => {
    const handleClick = () => {
        window.open(githubURL, '_blank', 'noopener,noreferrer');
    };

    return (
        <button onClick={handleClick} 
            className='absolute bottom-0 right-0 p-2 
            text-5xl hover:scale-[115%] text-[#84D2F6] 
            hover:text-[#6bce70] transition-all duration-150 
            ease-in-out border-none background-none cursor-pointer'>
            <AiFillGithub />
        </button>
    )
};

export default ProjectGithub;
