import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = ({ darkMode }) => {
    const isDark = darkMode;

    const skills = [
        'C++', 'Python', 'SQL',
        'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind CSS',
        'React', 'Node', 'Express',
        'MongoDb', 'Firebase',
        'Git', 'Github', 'Npm',
        'Postman', 'Linux', 'Render'
    ];
      

    return (
        <section className={`min-h-screen w-full px-6 pt-12 pb-20 md:pt-16 md:pb-28 flex flex-col items-center gap-16 transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>



            {/* === About Text & Animation === */}
            <article className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

                {/* Text Section */}
                <div className="flex-1 space-y-5 text-lg">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Get to <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>know</span> me!
                    </h1>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Hi, I’m <strong className={isDark ? 'text-white' : 'text-gray-800'}>Jatin Dhiman</strong> from Chandigarh, India.
                        <br />
                        I’m a <strong>Software developer</strong> and a Third year <strong>BE CSE</strong> student at UIET, Panjab University Chandigarh.
                        <br /><br />
                        I’m always <strong>open</strong> to new collaborations, freelance gigs, or internship opportunities.
                        Feel free to reach out — links are in the footer!
                    </p>
                </div>

                {/* Coder Animation */}
                <div className="flex-1 max-w-sm">
                    <Tilt
                        glareEnable
                        glareMaxOpacity={isDark ? 0.1 : 0.2}
                        glareColor={isDark ? '#ffffff' : '#000000'}
                        glarePosition="all"
                        glareBorderRadius="12px"
                    >
                        <Lottie
                            animationData={Coder}
                            loop
                            className={isDark ? 'filter brightness-90' : ''}
                        />
                    </Tilt>
                </div>
            </article>

            {/* === Skills Section === */}
            <section className="w-full max-w-6xl text-center">
                <h2 className="text-3xl font-bold mb-8">
                    Professional <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Skillset</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                    {skills.map((skill, index) => (
                        <Skills key={index} skill={skill} darkMode={darkMode} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default About;
