import React from 'react'
import transition from '../Utilities/transition'
import ExperienceCard from '../components/ExperienceCard'
import { motion } from 'framer-motion'


const About = () => {

    const Experience = [
        {
            title: "Freelance Website Development",
            period: 'Jan 2024 - Present',            
            at: 'Upwork / Fiver',
            description: 'Worked on various projects, from e-commerce sites to custom CMS platforms, using technologies like JavaScript, React, and Node.js. My focus is on building efficient, scalable solutions that meet client needs.'
        },
        {
            title: "Lead Web Developer",
            period: 'Oct 2023 - Jan 2024',
            at: 'Cyberwing.pk, Lahore',
            description: 'As the Lead Web Developer at Cyberwing, I was entrusted with spearheading the technological direction and execution of web projects. One of my primary achievements was the comprehensive overhaul of Cyberwing\'s website. '
        }
    ]
    return (
        <div className=' container mx-auto flex flex-col  px-10 pb-52  ' >
            <h1 className='text-3xl mt-16 font-semibold tracking-tight pb-5 pl-3 italic text-left ' >Professional Experience</h1>

            {Experience.map((exp,index) => (
                <motion.div
                    initial={{ opacity: 0, x: 800 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex md:w-full mb-4 justify-start gap-10  '
                    key={index}
                >
                    <div className='relative hidden lg:block ml-10'>
                        <div className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full"></div>
                        <div className="ml-3 h-[110%] w-0.5 bg-gradient-to-b from-gray-400 to-transparent"></div>
                    </div>

                    <ExperienceCard title={exp.title} period={exp.period} at={exp.at} description={exp.description} />
                </motion.div>
            ))}



        </div>
    )
}

export default transition(About)
