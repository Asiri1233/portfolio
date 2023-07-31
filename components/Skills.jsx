"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

const skillsData = [
  {
    name: "Javascript",
    imageUrl: "/javascript.webp",
    description:
      "Javascript is a high-level, interpreted scripting language...",
  },
  {
    name: "MongoDB",
    imageUrl: "/mongo.svg",
    description: "MongoDB is a popular NoSQL database program...",
  },
  {
    name: "Redux",
    imageUrl: "/redux.webp",
    description: "Redux is a Predictable State Container for JavaScript Apps",
  },
  {
    name: "React",
    imageUrl: "/reactjs.webp",
    description:
      "A JavaScript library that is used for building user interfaces",
  },
  {
    name: "NodeJS",
    imageUrl: "/nodejs.png",
    description: "A powerful server-side JavaScript runtime",
  },
  {
    name: "NextJS",
    imageUrl: "/nextjs.webp",
    description:
      "A popular React framework that provides server-side rendering",
  },
  {
    name: "Figma",
    imageUrl: "/figma.webp",
    description:
      " An essential design tool for crafting stunning user interfaces ",
  },
  {
    name: "CSS",
    imageUrl: "/CSS.webp",
    description: "Used to style and design web pages",
  },
  {
    name: "ExpressJS",
    imageUrl: "/expressjs.svg",
    description: "A fast and flexible web application framework for Node.js ",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "/tailwind.png",
    description:
      "A utility-first CSS framework that enables rapid web development",
  },
  {
    name: "Prisma",
    imageUrl: "/prisma.png",
    description: "Prisma is a modern database toolkit",
  },
  {
    name: "GraphQL",
    imageUrl: "/graphql.png",
    description: "GraphQL is a query language for APIs,",
  },
  {
    name: "TypeScript",
    imageUrl: "/typescript.png",
    description: "TypeScript is a typed superset of JavaScript",
  },
];

const Skills = () => {
  const backgroundColor = "#323244"; // Background color

  // Divide skillsData into two separate arrays
  const middleIndex = Math.ceil(skillsData.length / 2);
  const firstHalf = skillsData.slice(0, middleIndex);
  const secondHalf = skillsData.slice(middleIndex);

  return (
    <div className="w-full mx-auto mt-8  rounded-lg shadow-lg p-4">
      <Marquee speed={100} direction="left">
        {firstHalf.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4  text-gray-800 flex items-center ml-6 justify-start md:mb-6 mb-2  "
            style={{ backgroundColor }}
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-16 h-16 mr-4 "
            />
            <div>
              <h3 className="text-lg text-white font-semibold mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-200 hidden md:block line-clamp-3">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee speed={100} direction="right">
        {secondHalf.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4  text-gray-800 flex items-center ml-6 justify-start mb-2  "
            style={{ backgroundColor }}
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="w-16 h-16 mr-4 "
            />
            <div>
              <h3 className="text-lg text-white font-semibold mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-200 hidden md:block line-clamp-3">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
