import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import { DiJavascript1, DiNodejs } from 'react-icons/di';
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaPython, FaHtml5, FaCss3Alt, FaLinux } from 'react-icons/fa';
import { SiPostman, SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiMysql, SiRender } from 'react-icons/si';



const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        Python: <FaPython />,
        SQL: <SiMysql />,
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        Javascript: <DiJavascript1 />,
        Bootstrap: <FaBootstrap />,
        'Tailwind CSS': <SiTailwindcss />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Firebase: <SiFirebase />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Postman: <SiPostman />,
        Linux: <FaLinux />,
        Render: <SiRender />
    };
      
      

    return (
        <div
            title={skill}
            className="flex flex-col items-center justify-center bg-blue-100 text-blue-800 rounded-xl shadow-sm hover:bg-blue-200 transition duration-300 p-4 text-3xl"
        >
            {icon[skill]}
            <span className="text-sm mt-2 font-medium">{skill}</span>
        </div>
    );
};

export default Skills;
