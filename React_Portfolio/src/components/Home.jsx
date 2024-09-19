import React, { useState } from "react";
import image3 from "../assets/images/image3.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const social_media = [
    { icon: <FaLinkedin />, label: "LinkedIn" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiLeetcode />, label: "LeetCode" },
    { icon: <FaEnvelope />, label: "Email" }
  ];

  // Circle Shape with cyan glow and gradient border
  const imgContainerStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "50%", // Circle shape
    border: isHovered
      ? "6px solid linear-gradient(45deg, #00bcd4, #00acc1)" // Cyan gradient border on hover
      : "3px solid #e0e0e0", // Normal border
    boxShadow: isHovered
      ? "0 12px 24px rgba(0, 188, 212, 0.4), 0 0 15px rgba(0, 188, 212, 0.8)" // Cyan glow on hover
      : "0 12px 24px rgba(0, 188, 212, 0.4)", // Regular cyan glow
    backgroundColor: "#fff",
    transition: "all 0.4s ease", // Smooth transition for border, shadow, etc.
  };

  const imgStyle = {
    transition: "transform 0.4s ease, filter 0.4s ease",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: isHovered ? "brightness(1.0) saturate(1.0)" : "brightness(1) saturate(1)",
    transform: isHovered ? "scale(1.08)" : "scale(1)", // Slightly larger on hover
    borderRadius: "50%", // Make sure the image stays circular
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3))",
    transition: "opacity 0.4s ease",
    opacity: isHovered ? 0.2 : 0, // A subtle overlay on hover
    borderRadius: "inherit", // Inherit from the container
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-12 md:flex-row flex-col items-center bg-gray-50"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <div
          style={imgContainerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={image3} alt="Description of the image" style={imgStyle} />
          <div style={overlayStyle}></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          <span className="block text-gray-700">Hello!</span>
          I am <span className="text-cyan-500">Subashini Ramasamy</span>
        </h1>
        <a
          href="/path-to-your-resume.pdf" // Update this to the path of your resume file
          download
          className="flex items-center bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
        >
          <FaDownload className="mr-2" /> Resume
        </a>
        <div className="mt-8 text-2xl flex items-center justify-center md:justify-start gap-6 text-gray-600">
          {social_media.map(({ icon, label }) => (
            <div
              key={label}
              className="transition-transform duration-300 transform hover:scale-125 cursor-pointer"
              aria-label={label}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
