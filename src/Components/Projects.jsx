import React, { useState } from 'react';
import ProjectBox from './ProjectBox';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import BlogImage from '../images/blog.png';
import ColorImage from '../images/color.png';
import SortImage from '../images/Sort.png';
import JoyImage from '../images/joy.png';
import OSImage from '../images/os.png';
import BookImage from '../images/Book.png';
import Project7Image from '../images/Book.png';
import Project8Image from '../images/Book.png';

const projectList = [

    {
        name: "BlogApp",
        image: BlogImage,
        description: "A full-stack blogging platform with user authentication and rich text editing",
        tags: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/yourusername/blogapp"
    },
    {
        name: "ColorPro",
        image: ColorImage,
        description: "Advanced color palette generator with CSS export functionality",
        tags: ["JavaScript", "CSS3", "HTML5"],
        githubLink: "https://github.com/jatindhiman05/Color-Shades"
    },
    {
        name: "Joystore",
        image: JoyImage,
        description: "Modern e-commerce store with state management, optimized fetching, and dynamic UI using Swiper and Toastify.",
        tags: ['React', 'Redux Toolkit', 'React Query', 'Axios', 'Tailwind CSS'],
        githubLink: 'https://github.com/jatindhiman05/Joystore'
    },
    {
        name: "SortVisualizer",
        image: SortImage,
        description: "Interactive tool to visualize various sorting algorithms with real-time animations.",
        tags: ['p5.js', 'Sorting', 'Animation', 'HTML5', 'CSS3'],
        githubLink: "https://github.com/jatindh05/Sort-Visualizer/"
    },
    {
        name: "OSAlgorithmSimulator",
        image: OSImage,
        description: "Simulator for core OS algorithms like Scheduling, Paging, Deadlock, and File Handling with C++.",
        tags: ['C++', 'OOP', 'Data Structures', 'File Handling'],
        githubLink: "https://github.com/jatindhiman05/Operating-System"
    },{
        name: "BookItup",
        image: BookImage,
        description: "A book searching application.",
        tags: ["React", "Node.js"],
        githubLink: "https://github.com/jatindhiman05/BookItUp"
    }
];

const Projects = ({ darkMode }) => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const showMoreProjects = () => {
        setVisibleProjects(projectList.length);
    };

    return (
        <section
            className={`min-h-screen pt-24 pb-20 mt-10 px-6 flex flex-col items-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
                }`}
            id="projects"
        >
            {/* Header */}
            <header className="text-center mb-16 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    My <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Projects</span>
                </h1>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Here are some of my featured projects. Each one represents unique challenges and learning experiences.
                </p>
            </header>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {projectList.slice(0, visibleProjects).map((project, index) => (
                    <div
                        key={project.name}
                        className={`animate-fadeInUp delay-${index * 100}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <ProjectBox
                            projectPhoto={project.image}
                            projectName={project.name}
                            description={project.description}
                            tags={project.tags}
                            githubLink={project.githubLink}
                            darkMode={darkMode}
                        />
                    </div>
                ))}
            </div>


            {/* GitHub CTA */}
            <div className={`mt-16 p-6 rounded-xl text-center max-w-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                <FaGithub className={`text-4xl mx-auto mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`} />
                <h3 className="text-xl font-semibold mb-2">Want to see more?</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Check out my GitHub profile for all my projects!
                </p>
                <a
                    href="https://github.com/jatindhiman05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-2 rounded-lg font-medium transition-all ${darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        } shadow hover:shadow-md`}
                >
                    Visit My GitHub
                    <FaGithub className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default Projects;