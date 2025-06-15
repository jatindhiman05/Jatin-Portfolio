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
    // {
    //     name: "ColorPro",
    //     image: ColorImage,
    //     description: "Advanced color palette generator with CSS export functionality",
    //     tags: ["JavaScript", "CSS3", "HTML5"],
    //     githubLink: "https://github.com/yourusername/colorpro"
    // },
    // {
    //     name: "SortVisualizer",
    //     image: SortImage,
    //     description: "Interactive visualization tool for sorting algorithms",
    //     tags: ["React", "D3.js", "Algorithms"],
    //     githubLink: "https://github.com/yourusername/sort-visualizer"
    // },
    // {
    //     name: "Joystore",
    //     image: JoyImage,
    //     description: "E-commerce platform for gaming accessories",
    //     tags: ["Next.js", "Stripe", "Tailwind CSS"],
    //     githubLink: "https://github.com/yourusername/joystore"
    // },
    // {
    //     name: "OSAlgorithmSimulator",
    //     image: OSImage,
    //     description: "Operating system algorithm simulation tool",
    //     tags: ["Python", "PyQt", "Algorithms"],
    //     githubLink: "https://github.com/yourusername/os-simulator"
    // },
    // {
    //     name: "BookItup",
    //     image: BookImage,
    //     description: "Library management system with recommendation engine",
    //     tags: ["Django", "Python", "PostgreSQL"],
    //     githubLink: "https://github.com/yourusername/bookitup"
    // },
    // {
    //     name: "TaskMaster",
    //     image: Project7Image,
    //     description: "Productivity app with gamified task completion",
    //     tags: ["React Native", "Firebase", "Redux"],
    //     githubLink: "https://github.com/yourusername/taskmaster"
    // },
    // {
    //     name: "WeatherWise",
    //     image: Project8Image,
    //     description: "Real-time weather forecasting application",
    //     tags: ["TypeScript", "React", "Weather API"],
    //     githubLink: "https://github.com/yourusername/weatherwise"
    // },
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