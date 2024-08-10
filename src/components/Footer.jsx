// Footer.js
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900   w-[100%]  text-white text-center py-4">
            <div className="text-md flex justify-center space-x-4 mb-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaTwitter size={19} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaLinkedinIn size={19} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
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
