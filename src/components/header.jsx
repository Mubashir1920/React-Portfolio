import React, { useState } from 'react';
import { Link }from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (

        <div className='container mx-auto'>
            <header className="bg-black p-4 flex  items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src="path/to/Linkvatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
                    <h1 className="text-xl text-white font-semibold">Mubashir | Portfolio</h1>
                </div>
                <nav className="hidden text-white md:flex space-x-8">
                    <Link to='/' className="hover:underline">Skills</Link>
                    <Link to='/' className="hover:underline">Projects</Link>
                    <Link to='/' className="hover:underline">WordPress</Link>
                    <Link to='/' className="hover:underline">Contact</Link>
                </nav>
                <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-2xl">
                    Resume
                </button>
                <button onClick={()=>setIsMobileMenuOpen(prevState => !prevState)} id="menu-btn" className="md:hidden  flex flex-col items-center justify-center w-8 h-8">
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                    <span className="block h-0.5 w-6 my-1 bg-white"></span>
                </button>
            </header>
            {isMobileMenuOpen && <nav id="mobile-menu" className="  bg-black text-white p-4 space-y-4">
                <Link onClick={()=>setIsMobileMenuOpen(prevState => !prevState)} to='/'  className="block hover:underline">Skills</Link>
                <Link onClick={()=>setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">Projects</Link>
                <Link onClick={()=>setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">WordPress</Link>
                <Link onClick={()=>setIsMobileMenuOpen(prevState => !prevState)} to='/' className="block hover:underline">Contact</Link>
                <Link  to='/' className="block w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-2xl">
                    Resume
                </Link>
            </nav>}
        </div>


    )
}

export default Header
