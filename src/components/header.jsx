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
                    <Link to='/TechStack' className="hover:overline">TechStack</Link>
                    <Link to='/projects' className="hover:underline">Projects</Link>
                    <Link to='/about' className="hover:underline">About</Link>
                    <Link to='/contact' className="hover:overline">Contact</Link>
                </nav>
                <Link to='/resume' className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                    Resume
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
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/TechStack' className="block hover:underline">TechStack</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/projects' className="block hover:underline">Projects</Link>
            
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/about' className="block hover:underline">About</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/contact' className="block hover:underline">Contact</Link>
                    <Link to='/resume' onClick={() => setIsMobileMenuOpen(prevState => !prevState)}  className="block w-[80%] bg-purple-600 hover:bg-purple-800 text-white text-center px-4  py-2 rounded-full">
                        Resume
                    </Link>
                </nav>
            }
        </div>


    )
}

export default Header
