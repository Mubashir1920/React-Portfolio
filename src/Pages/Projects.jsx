import React, { useState } from 'react';
import transition from '../Utilities/transition';
import ProjectCard from '../components/ProjectCard';
import myProjects from '../Utilities/data';
import { motion, AnimatePresence } from 'framer-motion';


const Projects = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration:0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 500 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 500 },
  };


  const [filteredProject, setFilteredProject] = useState(myProjects);
  const [selectedTab, setSelectedTab] = useState('All')
  const projectType = [
    'All',
    'Full-Stack',
    'Front-End',
    'WordPress',
  ]

  const ActiveTab = (tab) => {
    setSelectedTab(tab);

    const filtered = tab === 'All'
      ? myProjects
      : myProjects.filter((project) => {
        switch (tab) {
          case 'Front-End':
            return project.type === 'Front-End';
          case 'WordPress':
            return project.type === 'WORDPRESS';
          case 'Full-Stack':
            return project.type === 'Full-Stack';
          default:
            return false;
        }
      });

    setFilteredProject(filtered);
  };


  return (
    <div className='container mx-auto'>
      <div className="flex flex-wrap pt-20 justify-center">
        {projectType.map((item,index) => (
          <a
            key={index}
            onClick={() => ActiveTab(item)}
            href="#_"
            className={`relative mx-3 mb-5 ${selectedTab === item ? 'bg-[#151030]' : ''}  px-6 py-3 font-bold text-white rounded-lg group`}
          >
            {selectedTab === item ? null : (
              <div>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              </div>
            )}
            <span className="relative">{item}</span>
          </a>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-10 mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center"
      >
        <AnimatePresence>
          {filteredProject.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ProjectCard key={index} project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default transition(Projects)
