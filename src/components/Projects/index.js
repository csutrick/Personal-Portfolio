import React from "react";

import ProjectCard from "./projectCard";
import projectsData from "./projectsData.json";

const Projects = () => {
    return (
        <section id="projects" 
        className="w-full flex flex-col">
            <div className="mb-4 w-full flex justify-center">
                <h2 className="px-8 pb-1 text-6xl font-bold text-[#84D2F6]
                border-b-4 border-[#84D2F6] drop-shadow-md">
                    Projects
                </h2>
            </div>
            <div className="w-full flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {projectsData.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title} 
                    content={project.content} 
                    image={project.image}
                    websiteURL={project.websiteURL}
                    githubURL={project.githubURL}
                />
            ))}
            </div>
        </section>
    );
};

export default Projects;
