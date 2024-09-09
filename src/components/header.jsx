import React, { useEffect, useRef, useState } from 'react';
import ProfilePic from '../assets/mubashir-min.webp'
import { IoMdClose } from "react-icons/io";

import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navref = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navref.current && !navref.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (

        <div className='container mx-auto'>
            <header className="bg-black p-4 flex  items-center justify-between">
                <Link to='/' className="flex items-center space-x-4">
                    <img src={ProfilePic} alt="Avatar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-xl text-white ">Mubashir | Portfolio</h1>
                </Link>
                <nav className="hidden font-normal text-white md:flex space-x-8">
                    <NavLink to='/projects' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Projects</NavLink>
                    <NavLink to='/TechStack' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">TechStack</NavLink>
                    <NavLink to='/about' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Experience</NavLink>
                    <NavLink to='/contact' className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Contact</NavLink>
                </nav>
                <Link to='/resume' className="relative hidden lg:block px-6 py-3 font-bold text-white rounded-lg group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-red-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                    <span className="relative">Resume</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(prevState => !prevState)} id="menu-btn" className="md:hidden  flex flex-col items-center justify-center w-8 h-8">
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                </button>
            </header>

            <nav ref={navref}
                className={`${isMobileMenuOpen ? 'translate-x-0 ' : 'translate-x-[110%]'} rounded-3xl fixed flex flex-col items-center gap-7 justify-center transition-transform duration-300 text-xl top-0 z-10 text-center w-[80%] h-[100dvh] bg-black right-0  text-white p-4 space-y-4`}
            >
                <div className='absolute top-16 right-10' >
                    <IoMdClose onClick={() => setIsMobileMenuOpen(false)} className='hover:rotate-180 duration-300 transition-transform text-white cursor-pointer' size={28} />
                </div>
                <NavLink onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/projects' className="font-bold  relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Projects</NavLink>
                <NavLink onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/TechStack' className="font-bold relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">TechStack</NavLink>

                <NavLink onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/about' className="font-bold  relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Experience</NavLink>
                <NavLink onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/contact' className="font-bold relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ">Contact</NavLink>
                <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/resume' className="relative px-6 py-3 font-bold text-white rounded-lg group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-red-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                    <span className="relative">Resume</span>
                </Link>
            </nav>

        </div>


    )
}

export default Header
