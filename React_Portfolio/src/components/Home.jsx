import React, { useState } from "react";
import image3 from "../assets/images/img1.jpg";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const social_media = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/subashini-r-3516282b2",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/subashinir05",
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      url: "https://leetcode.com/u/subashinir05/",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:subashinir05@gmail.com",
    },
  ];

  const imgContainerStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "50%",
    border: isHovered
      ? "6px solid linear-gradient(45deg, #00bcd4, #00acc1)"
      : "3px solid #e0e0e0",
    boxShadow: isHovered
      ? "0 12px 24px rgba(0, 188, 212, 0.4), 0 0 15px rgba(0, 188, 212, 0.8)"
      : "0 12px 24px rgba(0, 188, 212, 0.4)",
    backgroundColor: "#fff",
    transition: "all 0.4s ease",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    transition: "transform 0.4s ease",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3))",
    transition: "opacity 0.4s ease",
    opacity: isHovered ? 0.2 : 0,
    borderRadius: "inherit",
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
          className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <img src={image3} alt="Description of the image" style={imgStyle} />
          <div style={overlayStyle}></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          <span className="block text-gray-700">Hello!</span>I am{" "}
          <span className="text-cyan-500">Subashini Ramasamy</span>
        </h1>
        <a
          href="https://raw.githubusercontent.com/subashinir05/React_Portfolio/main/public/Resume.pdf"
          download
          className="flex items-center bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
        >
          <FaDownload className="mr-2" /> Resume
        </a>

        <div className="mt-8 text-2xl flex items-center justify-center md:justify-start gap-6 text-gray-600">
          {social_media.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-125 cursor-pointer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
