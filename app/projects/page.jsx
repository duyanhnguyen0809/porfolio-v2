"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  // {
  //   image: "/work/3.png",
  //   category: "react js",
  //   name: "Nexa Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: "react js",
  //   name: "Solstice Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: "next js",
  //   name: "Lumina Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: "next js",
  //   name: "Evolve Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/3.png",
  //   category: "next js",
  //   name: "Ignite Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: "next js",
  //   name: "Envision Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: "fullstack",
  //   name: "Serenity Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  {
    image: "/work/6.png",
    category: "fullstack",
    name: "Leagues Of Stones",
    description:
      'The "League of Stones" platform is a responsive web application developed with React. It allows players to compete in a strategic card game using champions from League of Legends. The platform features a matchmaking system to find opponents of similar skill levels and ensures an optimal gaming experience across different devices.',
    link: "https://github.com/duyanhnguyen0809/leagues-of-stones",
    github: "https://github.com/duyanhnguyen0809/leagues-of-stones",
  },
  {
    image: "/work/5.png",
    category: "fullstack",
    name: "Project Humanity",
    description:
      "This Digital Humanity project involves developing an application that allows for the visualization of the communes of the Alpes-Maritimes at different periods.",
    link: "https://github.com/duyanhnguyen0809/projet-humanite",
    github: "https://github.com/duyanhnguyen0809/projet-humanite",
  },
];
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log(filteredProjects);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
