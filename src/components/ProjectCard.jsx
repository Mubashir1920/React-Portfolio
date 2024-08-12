import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, src }) => {

    console.log(src)
    return (
        <div className="relative bg-[#151030] p-6 rounded-xl max-w-sm">
            <a href={project.github} target='_blank' ><FaGithub size={38} className='bg-black p-1 rounded-full absolute top-6 right-6 cursor-pointer ' /></a>
            <div className="bg-[#151030] p-2 ">
                <img
                    src={require(`../assets/project/${project.image}`)}
                    alt={project.name}
                    className="rounded-mdw-full h-[150px] rounded-xl object-cover"
                />
            </div>

            <a href={project.link} target='_blank' className='flex items-center mt-4  ' >
                <h2 className="text-white text-xl font-semibold hover:text-gray-200 transition-colors">{project.name}</h2>
                <FaExternalLinkAlt size={20} className='cursor-pointer ml-3 ' />
            </a>
            <p className="text-gray-400 text-sm mt-2">
                {project.desc}
            </p>
            <div className="mt-4 flex space-x-2">
                {project.techstack.map((tech, index) => (
                    <span key={index} className="text-xs font-medium text-[#10B981]">#{tech}</span>

                ))}

            </div>
        </div>
    );
};

export default ProjectCard;
