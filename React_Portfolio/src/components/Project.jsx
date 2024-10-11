import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/ipro1.png";
import project2 from "../assets/images/ipro2.png";
import project3 from "../assets/images/ipro3.png";
import project4 from "../assets/images/ipro4.png";
import demoVideo1 from "../assets/images/vpro1.mp4";
import demoVideo2 from "../assets/images/vpro2.mp4";
import demoVideo3 from "../assets/images/vpro4.mp4";
import demoVideo4 from "../assets/images/vpro3.mp4";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const VideoModal = ({ isOpen, onClose, videoSource }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-2xl w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-800"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div className="w-full h-auto max-w-[640px] mx-auto">
          <video
            controls
            className="w-full h-full rounded-lg"
            src={videoSource}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const swiperRef = useRef(null);

  const projects = [
    {
      img: project1,
      name: "Expense Tracker",
      github_link: "https://github.com/subashinir05/Tracker",
      demo_video: demoVideo1,
    },
    {
      img: project2,
      name: "Blog App",
      github_link: "https://github.com/subashinir05/MERN-Blog",
      demo_video: demoVideo2,
    },
    {
      img: project3,
      name: "Guest Room Reservation",
      github_link: "https://github.com/subashinir05/GuestRooms-MERN",
      demo_video: demoVideo3,
    },
    {
      img: project4,
      name: "Secure Image Transmission",
      github_link: "https://github.com/subashinir05/Image_Encryption",
      demo_video: demoVideo4,
    },
  ];

  const openModal = (videoLink) => {
    setCurrentVideo(videoLink);
    setModalOpen(true);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo("");
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 md:py-28 bg-gray-50 flex flex-col justify-center"
    >
      <div className="text-center mb-8 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          My Projects
        </h3>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Explore my awesome works
        </p>
      </div>
      <div className="flex max-w-6xl gap-6 px-4 md:px-5 mx-auto w-full flex-grow">
        <div className="lg:w-full w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105 object-contain h-64 w-full"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                    {project_info.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-cyan-500 hover:bg-cyan-600 px-3 md:px-4 py-2 rounded-md shadow transition duration-300"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={() => openModal(project_info.demo_video)}
                      className="text-white bg-cyan-500 hover:bg-cyan-600 px-3 md:px-4 py-2 rounded-md shadow transition duration-300"
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSource={currentVideo}
      />
    </section>
  );
};

export default Project;
