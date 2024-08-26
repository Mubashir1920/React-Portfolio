import React from 'react';

const Hero = () => {
    return (
        <div className="container mx-auto ">
            <div className=" text-white mt-36 md:mt-48 lg:mt-36 flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-white to-transparent ml-2"></div>
                    </div>
                    <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mt-4">
                        Hi, I'm <span className="text-purple-500">Mubashir</span>
                    </h1>
                    <p className="text-lg font-thin sm:text-xl md:text-2xl mt-4">
                        I Develop <span className="font-normal">Websites</span> For  <span className="font-normal">Growing Businesses</span>
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 italic mt-2">
                        Full Stack Developer
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
