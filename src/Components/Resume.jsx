import React from 'react';
import { BsDownload } from 'react-icons/bs';
import pdf from '../Jatin_Resume.pdf';

const Resume = ({ darkMode }) => {
    return (
        <div
            className={`min-h-screen mt-10 flex flex-col items-center justify-center px-4 py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
                }`}
        >
            <div className="text-center mb-8 mt-9">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    My <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Resume</span>
                </h1>
                <p className="text-sm text-gray-400">
                    View or download the latest version of my resume
                </p>
            </div>

            {/* Resume Viewer in a sleek container */}
            <div
                className={`w-full max-w-4xl aspect-[8.5/11] rounded-2xl overflow-hidden shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}
            >
                <iframe
                    src={pdf}
                    title="Devansh Sahni Resume"
                    className="w-full h-full"
                />
            </div>

            {/* Download Button */}
            <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                download="Jatin_Resume.pdf"
                className="mt-8"
            >
                <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium ${darkMode
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                >
                    <BsDownload className="text-lg" />
                    Download Resume
                </button>
            </a>
        </div>
    );
};

export default Resume;
