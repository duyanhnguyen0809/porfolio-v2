"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
  // {
  //   image: "/work/3.png",
  //   category: "fullstack",
  //   name: "Nova Website",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: "fullstack",
  //   name: "Zenith Website",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Check out my latest projects and find out more about what I've been...
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
