import React from 'react'
import MubashirPdf from '../Mubashir-CV.pdf'
import CvImg from '../assets/cv.jpeg'
import transition from '../Utilities/transition'

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <a
                href={MubashirPdf}
                download={MubashirPdf}
                className="mt-8 mb-4 px-6 py-2 bg-purple-800 text-white text-lg font-medium rounded-lg hover:bg-purple-700"
            >
                Download CV
            </a>
            <div className="flex justify-center items-center flex-col mx-3 max-w-full">
                <img
                    src={CvImg}
                    alt="CV"
                    className="w-full h-auto max-w-lg"
                />
            </div>
            <a
                href={MubashirPdf}
                download={MubashirPdf}
                className="mt-8 mb-4 px-6 py-2 bg-purple-800 text-white text-lg font-medium rounded-lg hover:bg-purple-700"
            >
                Download CV
            </a>
        </div>
    )
}

export default transition(Resume)
