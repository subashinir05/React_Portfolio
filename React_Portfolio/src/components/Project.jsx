import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/ipro1.png";
import project2 from "../assets/images/ipro2.png";
import project3 from "../assets/images/ipro3.png";
import project4 from "../assets/images/ipro4.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Expense Tracker",
      github_link: "https://github.com/subashinir05/Expense_Tracker",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project2,
      name: "Blog App",
      github_link: "https://github.com/subashinir05/MERN-Blog",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Guest Room Reservation",
      github_link: "https://github.com/subashinir05/GuestRooms-MERN",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "Secure Image Transmission",
      github_link: "https://github.com/subashinir05/Image_Encryption",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-28 bg-gray-50 flex flex-col justify-center"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold text-gray-800">My Projects</h3>
        <p className="text-gray-600 mt-2 text-lg">Explore my awesome works</p>
      </div>
      <div className="flex max-w-6xl gap-6 px-5 mx-auto flex-grow">
        <div className="lg:w-full w-full">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
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
                <div className="h-fit w-full p-4 bg-white rounded-lg shadow-md transition-transform duration-300">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105 object-contain h-80 w-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {project_info.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md shadow transition duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md shadow transition duration-300"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
