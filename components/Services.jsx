"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import ServiceCard from "./ServiceCard";

const ourServices = [
  {
    title: "Web Design",
    imageSrc:
      "/web-design.avif",
    description:
      "Crafting beautiful and intuitive website designs to captivate your audience.",
  },
  {
    title: "Web Development",
    imageSrc: "/web-dev.jpg",
    description:
      "Building cutting-edge web applications with seamless frontend and backend integration.",
  },
  {
    title: "Video Editing",
    imageSrc: "/video-editing.webp",
    description:
      "Transforming raw footage into stunning visual stories that leave a lasting impact.",
  },
  {
    title: "Graphic Design",
    imageSrc: "graphic-design.png",
    description:
      "Creating visually striking graphics and illustrations that resonate with your audience.",
  },
  {
    title: "Discord & Telegram Bots Coding",
    imageSrc: "telegram_bots.avif",
    description:
      "Developing interactive bots to streamline and automate your community interactions.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="md:mr-6 ">
        <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent  md:p-12 md:mr-4 font-bold md:text-[1.75rem] text-1xl text-center uppercase pb-3 font-cinzel">
         Our Services
        </h1>
      </div>
      <div>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ourServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Services;
