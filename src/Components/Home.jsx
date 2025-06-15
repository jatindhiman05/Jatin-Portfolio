import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.jsx";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = ({ darkMode }) => {
    const isDark = darkMode;

    const textColor = isDark ? 'text-gray-100' : 'text-gray-800';
    const accentColor = isDark ? 'text-blue-400' : 'text-blue-600';
    const bgColor = isDark ? 'bg-gray-900' : 'bg-white';

    const cardBg = isDark ? 'bg-gray-800 border-blue-400' : 'bg-blue-50 border-blue-600';

    return (
        <section className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 px-4 sm:px-6 pt-24 md:pt-32`}>

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">
                {/* Left Text */}
                <div className="flex-1 space-y-6 animate-fadeIn">
                    <div className="space-y-3">
                        <p className={`text-lg md:text-xl font-medium tracking-wide ${accentColor}`}>Hello, I'm</p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                            Jatin Dhiman
                        </h1>
                    </div>

                    <div className="text-xl md:text-2xl h-12 min-h-[48px]">
                        <Typed darkMode={darkMode} />
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {[
                            { href: "https://github.com/jatindhiman05", Icon: FaGithub, label: "GitHub" },
                            { href: "https://linkedin.com/in/jatindhiman05", Icon: FaLinkedin, label: "LinkedIn" },
                            { href: "mailto:jatin121dhiman@gmail.com", Icon: FaEnvelope, label: "Email" }
                        ].map(({ href, Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl p-2 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${isDark ? 'bg-gray-800 text-gray-300 hover:text-white' : 'bg-white text-gray-600 hover:text-black'
                                    }`}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Optional Lottie Section */}
                {/* <div className="hidden lg:block flex-1 animate-fadeIn">
                    <Lottie animationData={SpaceBoy} loop={true} />
                </div> */}
            </div>

            {/* About Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-24 lg:mt-32 w-full max-w-6xl mx-auto gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-7 animate-fadeIn">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>

                    <div className={`space-y-5 text-base lg:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>
                            I'm passionate about transforming ideas into impactful digital experiences.
                            As a developer, I thrive on challenges that push my boundaries and lead to solutions I'm proud of.
                        </p>

                        <div className={`p-5 rounded-xl border-l-4 ${cardBg} hover:shadow-md transition-shadow`}>
                            <p className="font-medium">
                                <span className="font-semibold">Tech Stack:</span> Fluent in <span className={accentColor}>C++</span>, experienced in <span className={accentColor}>Javascript</span>, currently building with <span className={accentColor}>MERN</span> stack.
                            </p>
                        </div>
                        <p className="flex items-center">
                            When I’m not coding, I’m probably sipping coffee{' '}
                            <CiCoffeeCup className={`ml-2 text-2xl rotate-[15deg] scale-125 ${isDark ? 'text-amber-400' : 'text-amber-700'} animate-bounce`} />
                        </p>
                    </div>
                </div>

                {/* Avatar Image */}
                <Tilt
                    tiltReverse={true}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    scale={1.03}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    className="flex-1 flex justify-center"
                >
                    <div className="animate-fadeIn relative group">
                        <div className={`w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 shadow-xl transition-all group-hover:shadow-2xl ${isDark ? 'border-gray-700' : 'border-blue-100'}`}>
                            <img
                                src={Avatar}
                                alt="Jatin Dhiman"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Tilt>
            </div>

            <div className="h-24 lg:h-32" />
        </section>
    );
};

export default Home;
