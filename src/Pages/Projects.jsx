import React, { useState } from 'react'
import transition from '../Utilities/transition'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('All')
  const projectType = [
    'All',
    'MERN Stack',
    'React Js',
    'WordPress'
  ]

  const ActiveTab = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <div className='container mx-auto' >
      <div className="flex flex-wrap  pt-20 justify-center">
        {projectType.map(item => (
          <a key={item.id} onClick={() => ActiveTab(item)} href="#_" className={`relative mx-3 mb-5 ${selectedTab === item ? 'bg-[#151030]' : ''}  px-6 py-3 font-bold text-white rounded-lg group`}>
            {selectedTab === item ? null : <div><span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span></div>}
            <span className="relative">{item}</span>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>


    </div>
  )
}

export default transition(Projects)
