import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';

const ProjectBox = ({
    projectPhoto,
    projectName,
    desc,
    github,
    website,
    tags,
    darkMode,
    className = ''
}) => {
    return (
        <article className={`group h-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} ${className}`}>
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={projectPhoto}
                    alt={`${projectName} Project Screenshot`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                <div className="flex justify-between items-start mb-3">
                    <FiFolder className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} mt-1`} />
                    <div className="flex gap-3">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1.5 rounded-full ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-black hover:bg-gray-100'} transition-colors`}
                            >
                                <FaGithub />
                            </a>
                        )}
                        {website && (
                            <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1.5 rounded-full ${darkMode ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'} transition-colors`}
                            >
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {projectName}
                </h3>

                <p className={`text-sm mb-4 flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                            <FaGithub />
                            Code
                        </a>
                    )}
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-colors bg-blue-600 hover:bg-blue-500 text-white"
                        >
                            <FaExternalLinkAlt />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectBox;
