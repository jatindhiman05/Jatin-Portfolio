import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = ({ darkMode }) => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            url: "https://github.com/jatindhiman05",
            label: "GitHub",
            hoverClass: darkMode ? "hover:text-white" : "hover:text-gray-900"
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/jatindhiman05/",
            label: "LinkedIn",
            hoverClass: darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
        },
        {
            icon: <GrMail />,
            url: "mailto:jatin121dhiman@gmail.com",
            label: "Email",
            hoverClass: darkMode ? "hover:text-red-400" : "hover:text-red-600"
        },
        {
            icon: <SiLeetcode />,
            url: "https://leetcode.com/jatindhiman05/",
            label: "LeetCode",
            hoverClass: darkMode ? "hover:text-yellow-400" : "hover:text-yellow-600"
        }
    ];

    return (
        <footer className={`py-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${link.hoverClass} transition-colors duration-200`}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        © Jatin Dhiman.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;