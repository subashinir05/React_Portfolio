import React from "react";

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
    <section
      id="about"
      className="relative bg-gray-50 min-h-screen py-16 px-6 lg:px-12 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Introduction */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700">About Me</h2>
          <p className="text-gray-600 text-lg leading-8 text-justify">
            I'm Subashini Ramasamy, currently pursuing a Master's in Computer
            Applications. My path in technology has inspired me to create
            impactful projects and innovative solutions. With a strong
            commitment to continuous learning, I aim to enhance my skills and
            make a significant contribution to the tech landscape.
          </p>
        </div>

        {/* Right: Education Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h3 className="text-3xl font-semibold text-cyan-500 text-center lg:text-left">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-75 transform skew-x-12 -z-10"></div>
                <h4 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h4>
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
    </section>
  );
};

export default About;
