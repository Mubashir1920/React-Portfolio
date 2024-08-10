import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactImage from '../assets/contact.png'

const Contact = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col  min-h-screen  text-white">
      <div className='px-11 pt-10 lg:px-24  ' >
        <h2 className=" font-extrabold text-left lg:text-6xl  text-4xl ">Get <span className='text-purple-800' >In</span> Touch</h2>
        <p className='text-white text-md py-2' >Lets Discuss The Project . Preferably Email me at given Or Reach out to me on LinkedIn.</p>

      </div>
      <div className="flex items-center pt-5  pb-10 justify-around w-[100%] ">
        {/* Left Section: Contact Form */}
        <div className="bg-[#1b1b32]  lg:w-[50%] md:w-[50%] p-10 rounded-lg shadow-lg ">
          <h1 className='text-white text-sm capitalize italic' >contact me at <a className='font-semibold' href="mailto:mubashir417@outlook.com">mubashir@417@outlook.com</a></h1>
          <h1 className='text-white text-lg py-4 capitalize italic' >OR</h1>
          <h2 className="text-2xl italic font-bold mb-6">Fill Out the Form</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 bg-transparent  border   rounded-xl focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 bg-transparent border  rounded-xl focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Enter Your Message"
                className="w-full p-3 bg-transparent border    rounded-xl focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-[#3b3b54] rounded-lg hover:bg-gray-700 transition-colors">
              SUBMIT
            </button>
          </form>
          <div className="flex space-x-4 mt-6 justify-center">
            <a href="https://www.linkedin.com/in/mohammad-mubashir-060923234/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-[#0e76a8] hover:text-white transition-colors" />
            </a>
            <a href="mailto:mubashir417@outlook.com">
              <FaEnvelope size={30} className="text-[#D44638] hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Section: Astronaut Image */}
        <div className='hidden lg:block'  >
          <img
            src={ContactImage}
            alt="Astronaut"
            className="contactImg w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
