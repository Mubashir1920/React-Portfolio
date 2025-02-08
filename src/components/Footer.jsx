// Footer.js
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#0a0a0a]  w-[100%]  text-white text-center py-4">
            <div className="text-md flex justify-center space-x-4 mb-3">
                <a href="https://x.com/TheTechGuy_1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaTwitter size={19} />
                </a>
                <a href="https://www.linkedin.com/in/mubashir1902/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaLinkedinIn size={19} />
                </a>
                <a href="https://github.com/Mubashir1920/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaGithub size={19} />
                </a>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-xs flex items-center ">© {currentYear} |   <FaHeart className='mx-2' color='red' size={12} />  Designed by Mubashir</p>
            </div>
        </footer>
    );
};

export default Footer;
