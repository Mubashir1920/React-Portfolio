import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/mubashir-min.webp'
import { IoMdClose } from "react-icons/io";



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (

        <div className='container mx-auto'>
            <header className="bg-black p-4 flex  items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={ProfilePic} alt="Avatar" className="w-10 h-10 rounded-full" />
                    <Link to='/' className="text-xl text-white ">Mubashir | Portfolio</Link>
                </div>
                <nav className="hidden font-normal text-white md:flex space-x-8">
                    <Link to='/projects' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Projects</Link>
                    <Link to='/TechStack' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">TechStack</Link>
                    <Link to='/about' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Experience</Link>
                    <Link to='/contact' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Contact</Link>
                </nav>
                <Link to='/resume' class="relative hidden lg:block px-6 py-3 font-bold text-white rounded-lg group">
                    <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                    <span class="relative">Resume</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(prevState => !prevState)} id="menu-btn" className="md:hidden  flex flex-col items-center justify-center w-8 h-8">
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                </button>
            </header>
            {isMobileMenuOpen &&
                <nav
                    id="mobile-menu"
                    className="fixed flex flex-col items-center gap-7 justify-center text-xl inset-0 z-10 text-center w-full h-full bg-white/40 backdrop-blur-md text-black p-4 space-y-4"
                >
                    <div className='absolute top-16 right-10' >
                        <IoMdClose onClick={() => setIsMobileMenuOpen(false)} className=' text-black cursor-pointer' size={28} />
                    </div>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/projects' className="font-bold  relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Projects</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/TechStack' className="font-bold relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">TechStack</Link>

                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/about' className="font-bold  relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Experience</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/contact' className="font-bold relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Contact</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/resume' class="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span class="relative">Resume</span>
                    </Link>
                </nav>
            }
        </div>


    )
}

export default Header
