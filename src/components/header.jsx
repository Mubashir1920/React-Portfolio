import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import ProfilePic from '../assets/mubashir-min.webp'


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    return (

        <div className='container mx-auto'>
            <header className="bg-black p-4 flex  items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={ProfilePic} alt="Avatar" className="w-10 h-10 rounded-full" />
                    <Link to='/' className="text-xl text-white font-semibold">Mubashir | Portfolio</Link>
                </div>
                <nav className="hidden font-semibold text-white md:flex space-x-8">
                    <Link  to='/TechStack' className="hover:overline">TechStack</Link>
                    <Link to='/' className="hover:underline">Projects</Link>
                    <Link to='/' className="hover:overline">Experience</Link>
                    <Link to='/' className="hover:underline">About</Link>
                    <Link to='/' className="hover:overline">Contact</Link>
                </nav>
                <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full">
                    Resume
                </button>
                <button onClick={() => setIsMobileMenuOpen(prevState => !prevState)} id="menu-btn" className="md:hidden  flex flex-col items-center justify-center w-8 h-8">
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                </button>
            </header>
            {isMobileMenuOpen &&
                <nav id="mobile-menu" className=" fixed text-center top-28 left-0 w-[100%]  bg-black text-white p-4 space-y-4">
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/TechStack' className="block hover:underline">TechStack</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">Projects</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">Experience</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">About</Link>
                    <Link onClick={() => setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">Contact</Link>
                    <Link to='/' className="block w-full   bg-purple-600 hover:bg-purple-800 text-white text-center px-4  py-2 rounded-full">
                        Resume
                    </Link>
                </nav>
            }
        </div>


    )
}

export default Header
