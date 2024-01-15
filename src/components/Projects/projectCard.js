import React from "react";

import ProjectGithub from "./projectGithub";

const ProjectCard = ({ title, content, image, websiteURL, githubURL }) => {
    return (
        <a href={websiteURL} target="_blank" rel="noopener noreferrer"
        aria-label={`Learn more about ${title}`}
        style={{ backgroundImage: `url(${image})` }}
        className="relative group h-[350px] w-full transition-all duration-150 ease-in-out
        rounded-xl drop-shadow-md hover:drop-shadow-2xl border-8 border-[#84D2F6] hover:border-[#59A5D8] hover:scale-[1.02]
        bg-center bg-cover bg-no-repeat backdrop-blur-none hover:backdrop-blur-sm">
            { /* project info */}
            <div className="absolute bottom-5 -left-1 max-w-[250px] p-2 pl-3
            rounded-r-lg bg-[#84D2F6] group-hover:bg-[#59A5D8] transition-colors duration-150 ease-in-out">
                <h3 className="font-bold text-white text-lg">{title}</h3>
                <h4 className="text-sm text-[#133C55]">{content}</h4>
            </div>
            { /* icon for github link */}
            <ProjectGithub 
                githubURL={githubURL}
            />
        </a>
    )
};

export default ProjectCard;