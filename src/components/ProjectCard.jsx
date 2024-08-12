import React from 'react';
import ProjectImg from '../assets/project/Fitlog.png';
import { FaGithub,FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
    return (
        <div className="relative bg-[#151030] p-6 rounded-xl max-w-sm">
            <FaGithub size={38}  className='bg-black p-1 rounded-full absolute top-6 right-6 cursor-pointer ' />
            <FaExternalLinkAlt size={20}  className='  absolute bottom-6 hover:text-black transition-colors right-5  cursor-pointer ' />
            <div className="bg-[#151030] p-2 rounded-lg">
                <img
                    src={ProjectImg}
                    alt="Car Rent"
                    className="rounded-md"
                />
            </div>
            <h2 className="text-white text-xl font-semibold mt-4">Car Rent</h2>
            <p className="text-gray-400 text-sm mt-2">
                Web-based platform that allows users to search, book, and manage car
                rentals from various providers, providing a convenient and efficient
                solution for transportation needs.
            </p>
            <div className="mt-4 flex space-x-2">
                <span className="text-xs font-medium text-[#6366F1]">#react</span>
                <span className="text-xs font-medium text-[#10B981]">#mongodb</span>
                <span className="text-xs font-medium text-[#EC4899]">#tailwind</span>
            </div>
        </div>
    );
};

export default ProjectCard;
