import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chat.png"
          title="Chat App Application"
          description="This is a Real-Time chat application is sending and receives messages in real-time using React and Firebase."
        />
        <ProjectCard
          src="/download.png"
          title="Tours and Travels Management System"
          description="This is Web Application use for booking and travelling easily and mainly create by using HTML,CSS and Javascript"
        />
        <ProjectCard
          src="/Frame 1.png"
          title="Space Theme Website"
          description=" This is Space Theme Website (Web Page) by using Next Js Framework."
        />
      </div>
    </div>
  );
};

export default Projects;
