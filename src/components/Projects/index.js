import React from "react";

import ProjectCard from "./projectCard";
import projectsData from "./projectsData.json";

const Projects = () => {
    return (
        <section id="projects" 
        className="w-full flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
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
        </section>
    );
};

export default Projects;
