import React from "react";
import { FaDatabase, FaBrain, FaCogs, FaNetworkWired } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Java", count: 80 },
    { name: "Python", count: 70 },
    { name: "SQL", count: 65 },
    { name: "API", count: 60 },
    { name: "React", count: 50 },
    { name: "MERN Stack", count: 40 },
  ];

  const interests = [
    { name: "Data Structures", icon: FaCogs },
    { name: "DBMS", icon: FaDatabase },
    { name: "Machine Learning", icon: FaBrain },
    { name: "Networks", icon: FaNetworkWired }, // Updated icon for Networks
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12">
        
        {/* Skills Section (Left Side) */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-gray-700">
            My Skills
          </h3>
          <p className="text-gray-600 mt-3 text-lg">
            Here's an overview of my technical expertise:
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex flex-col items-center">
                <div
                  className="relative w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#e5e7eb ${skill.count}%)`,
                  }}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white shadow-md rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-800">
                    {skill.count}%
                  </div>
                </div>
                <h4 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest Section (Right Side) */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-gray-700">
            Areas of Interest
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center bg-gray-100 p-4 sm:p-6 rounded-lg">
                <div className="text-cyan-500 text-2xl sm:text-3xl">
                  <interest.icon />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{interest.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
