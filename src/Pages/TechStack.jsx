import React from 'react'
import transition from '../Utilities/transition';
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaNode, FaWordpress, FaGithub, FaAmazon, FaMicrosoft } from "react-icons/fa";
import { SiMongodb, SiCplusplusbuilder, SiRedux,SiTailwindcss, SiExpress  } from "react-icons/si";
const TechStack = () => {
  return (
    <div className=' mx-auto px-8  container' >
      <h1 className='text-3xl mt-12 font-bold italic text-left' >My Tech Stack</h1>
      <p className='capitalize font-light py-2 italic text-lg' > an overview of the technologies and tools I'm proficient in, spanning across multiple domains</p>
      <div className='w-full h-0.5 bg-white' ></div>
      <div className="flex flex-col lg:flex-row md:flex-row  justify-start lg:gap-10" >
        <div className='mt-7 text-center  px-7 pb-6 box-border' >
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >Front End</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaReact size={26} className='mr-2' />React Js</li>
            <li className='flex items-center mb-3 ' ><SiRedux size={26} className='mr-2' />Redux</li>
            <li className='flex items-center mb-3 ' ><RiJavascriptFill size={26} className='mr-2' />Javascript</li>
            <li className='flex items-center mb-3 ' ><FaHtml5 size={26} className='mr-2' />HTML</li>
            <li className='flex items-center mb-3 ' ><FaCss3Alt size={26} className='mr-2' />CSS</li>
            <li className='flex items-center mb-3 ' ><SiTailwindcss size={24} className='mr-2' />Tailwind</li>
          </ul>
        </div>
        <div className='mt-7 text-center  px-7 pb-6 box-border' >
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >FullStack</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaNode size={26} className='mr-2' />MERN Stack</li>
            <li className='flex items-center mb-3 ' ><RiNextjsFill size={26} className='mr-2' />Next JS</li>
          </ul>
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >BackEnd</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaNode size={26} className='mr-2' />Node Js</li>
            <li className='flex items-center mb-3 ' ><SiExpress size={26} className='mr-2' />Express JS</li>
          </ul>
         
        </div>
        <div className='mt-7 text-center  px-7 pb-6 box-border' >
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >Databases</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><SiMongodb size={26} className='mr-2' />Mongo DB</li>
            <li className='flex items-center mb-3 ' ><FaDatabase size={26} className='mr-2' />Oracle DB</li>
          </ul>
        </div>
        <div className='mt-7 text-center  px-7 pb-6 box-border' >
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >CMS</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaWordpress size={26} className='mr-2' />WordPress</li>
          </ul>
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >Version Control</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaGithub size={26} className='mr-2' />Git</li>
          </ul>
        </div>
        <div className='mt-7 text-center  px-7 pb-6 box-border' >
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >Cloud Platform</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><FaAmazon size={26} className='mr-2' />AWS</li>
            <li className='flex items-center mb-3 ' ><FaMicrosoft size={22} className='mr-2' />Azure 365</li>
          </ul>
          <h1 className='font-bold tracking-tight hover:text-white transition-all duration-200 hover:bg-black    px-4 text-xl cursor-pointer bg-white text-black py-1 rounded-md ' >Languages</h1>
          <ul className='my-5 text-lg' >
            <li className='flex items-center mb-3 ' ><SiCplusplusbuilder size={26} className='mr-2' />C++</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default transition(TechStack)
