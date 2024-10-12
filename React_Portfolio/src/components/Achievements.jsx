import React from "react";
import achievement1 from "../assets/images/ac1.jpg";
import achievement2 from "../assets/images/ac2.jpg";
import achievement3 from "../assets/images/PG Conf 2.png";
import achievement4 from "../assets/images/PG Paper 4.jpg";
import achievement5 from "../assets/images/PG Idea.png";
import achievement6 from "../assets/images/PG POC.png";
import achievement7 from "../assets/images/Conf 1.png";
import achievement8 from "../assets/images/Paper 1.png";
import achievement9 from "../assets/images/Paper 2.png";
import achievement10 from "../assets/images/Paper 3.jpg";
import achievement11 from "../assets/images/Journal 1.png";
import achievement12 from "../assets/images/Journal 2.png";
import achievement13 from "../assets/images/Journal 3.png";
import achievement14 from "../assets/images/Journal 4.png";
import achievement15 from "../assets/images/GEC.png";
import achievement16 from "../assets/images/UG Idea.jpg";
import achievement17 from "../assets/images/UG POC.jpg";

const Achievements = () => {
  const achievements = [
    {
      img: achievement1,
      title: "Best Co-Curricular Student 2022",
      description:
        "Recognized for outstanding participation in co-curricular activities.",
    },
    {
      img: achievement2,
      title: "Best Co-Curricular Student 2023",
      description:
        "Recognized for exemplary involvement and achievements in co-curricular activities.",
    },
    {
      img: achievement3,
      title: "Conference Presentation",
      description:
        "Presented Weather Image Classification Using Vision Transformer at the ICCCNT 2024, IIT Mandi, India.",
    },
    {
      img: achievement4,
      title: "Paper Presentation",
      description:
        "Awarded 1st prize for the paper presentation on Vision Transformer at the intra-department symposium.",
    },
    {
      img: achievement5,
      title: "Project Presentation - Ideathon",
      description:
        "Secured 1st prize in the Ideathon, recognizing innovative solutions developed within a limited timeframe.",
    },
    {
      img: achievement6,
      title: "Project Presentation - Proof of Concept",
      description:
        "Awarded 1st prize in the Proof of Concept (PoC) event showcasing innovative ideas and projects.",
    },
    {
      img: achievement7,
      title: "Conference Presentation",
      description:
        "Presented Thyroid Disease Prediction using RandomForest Algorithm at the ICCMC 2023, Surya Engineering College, Erode, India.",
    },
    {
      img: achievement8,
      title: "Paper Presentation",
      description:
        "Secured third place in Inter College Paper Presentation, organized by KPR Institute of Engineering and Technology, Coimbatore.",
    },
    {
      img: achievement9,
      title: "Paper Presentation",
      description:
        "Presented a paper at the 17th National Level Technical Symposium BIOZEPHYR, organized by Velalar College of Engineering and Technology.",
    },
    {
      img: achievement10,
      title: "Paper Presentation",
      description:
        "Presented a paper at SAKHI'23, an Inter College Symposium organized by the IEEE Women In Engineering Society at Kongu Engineering College.",
    },
    {
      img: achievement11,
      title: "Research Paper Publication",
      description:
        "Published a research paper in the International Journal of Research Publication and Reviews (IJRPR).",
    },
    {
      img: achievement12,
      title: "Research Paper Publication",
      description:
        "Published a research paper in the International Research Journal Of Modernization In Engineering Technology And Science (IRJMETS).",
    },
    {
      img: achievement13,
      title: "Research Paper Publication",
      description:
        "Published a research paper in the International Journal of Scientific Research and Engineering Development.",
    },
    {
      img: achievement14,
      title: "Research Paper Publication",
      description:
        "Published a research paper in the International Journal of Progressive Research in Engineering Management and Science (IJPREMS).",
    },
    {
      img: achievement15,
      title: "Executive Member",
      description:
        "Served as an Executive Member of the Gender Equality Club during the academic year 2021-22.",
    },
    {
      img: achievement16,
      title: "Idea Presentation",
      description:
        "Presented innovative ideas during undergraduate studies, gaining accolades.",
    },
    {
      img: achievement17,
      title: "Project Presentation",
      description:
        "Presented project in proof of concept during undergraduate studies.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen py-28 bg-gray-50 flex flex-col justify-center"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-700">My Achievements</h3>
        <p className="mt-2 text-lg text-gray-600">
          Proud moments of my journey
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 mx-auto max-w-6xl">
        {achievements.map((achievement, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={achievement.img}
              alt={achievement.title}
              className="w-full h-48 object-cover"
              style={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
