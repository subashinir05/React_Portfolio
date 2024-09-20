import React from "react";
import image3 from "../assets/images/image3.png";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      cgpa: "8.76",
      institution: "Kongu Engineering College",
      duration: "2023-2025",
    },
    {
      degree: "Bachelor of Science (Information Systems)",
      cgpa: "8.73",
      institution: "Kongu Engineering College",
      duration: "2020-2023",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Introduction and education section */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-700 relative">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            I'm Subashini Ramasamy, currently pursuing a Master's in Computer Applications. My path in technology has inspired me to create impactful projects and innovative solutions. With a strong commitment to continuous learning, I aim to enhance my skills and make a significant contribution to the tech landscape.
          </p>

          <div className="mt-6 space-y-6">
            <h3 className="text-3xl font-semibold text-cyan-500">Education</h3>
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-75 transform skew-x-12 -z-10"></div>
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="mt-1 text-gray-400">
                    <span className="font-medium">CGPA:</span> {edu.cgpa}
                  </p>
                  <p className="mt-1 text-sm text-gray-400 italic">
                    {edu.institution} <span>({edu.duration})</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
            <img
              src={image3}
              alt="Subashini Ramasamy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-400 opacity-60 hover:opacity-30 transition duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
