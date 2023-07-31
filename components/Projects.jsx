// Projects.js
import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div id="portfolio">
      <div>
        <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent  md:p-12 md:mr-4 font-bold md:text-[1.75rem] text-1xl text-center uppercase pb-3 font-cinzel">
          Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-7">
        <ProjectCards
          projectImage={"/project1.png"}
          projectName={"Pixel MarketPlace"}
          projectDescription={"Place where you can find top-quality vendors"}
        />
        <ProjectCards
          projectImage={"/project2.png"}
          projectName={"Waymo Gaming Website"}
          projectDescription={"You can find various categories of games here"}
        />
        <ProjectCards
          projectImage={"/project3.png"}
          projectName={"Pixel Films"}
          projectDescription={"Best way to discover new films and tv seris"}
        />
        <ProjectCards
          projectImage={"/thumnail-design.png"}
          projectName={"Thumbnail Design For Youtube"}
          projectDescription={
            "Elevate Your YouTube Channel's Appeal with Captivating Thumbnail Designs"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
