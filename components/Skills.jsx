"use client"

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skillsData = [
    {
      name: 'Javascript',
      imageUrl: '/javascript.webp',
      description: 'Javascript is a high-level, interpreted scripting language...',
    },
    {
      name: 'MongoDB',
      imageUrl: '/mongo.svg',
      description: 'MongoDB is a popular NoSQL database program...',
    },
    {
      name: 'Redux',
      imageUrl: '/redux.webp',
      description: 'Redux is a Predictable State Container for JavaScript Apps',
    },
    {
      name: 'React',
      imageUrl: '/reactjs.webp',
      description: 'A JavaScript library that is used for building user interfaces',
    },
    {
      name: 'NodeJS',
      imageUrl: '/nodejs.png',
      description: 'A powerful server-side JavaScript runtime',
    },
    {
      name: 'NextJS',
      imageUrl: '/nextjs.webp',
      description: 'A popular React framework that provides server-side rendering',
    },
    {
      name: 'Figma',
      imageUrl: '/figma.webp',
      description: ' An essential design tool for crafting stunning user interfaces and visual experiences',
    },
    {
      name: 'CSS',
      imageUrl: '/CSS.webp',
      description: 'Used to style and design web pages, enhancing the presentation and layout of HTML',
    },
    {
      name: 'ExpressJS',
      imageUrl: '/expressjs.svg',
      description: 'A fast and flexible web application framework for Node.js ',
    },
    {
      name: 'Tailwind CSS',
      imageUrl: '/tailwind.png',
      description: 'A utility-first CSS framework that enables rapid web development',
    },
    
  ];

  const settings = {
    dots: false,
  infinite: true,
  speed: 4000, // Time for slide transition (4 seconds)
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1, // A very low value (close to 0) for continuous sliding without slowdown
  arrows: false,
  pauseOnHover: false,
  };

const Skills = () => {
  return (
    <div className="w-[100%] mx-auto mt-8 flex flex-col bg-[#0A0C10] ">
      <Slider {...settings}>
        {skillsData.map((skill, index) => (
          <div key={index} className="md:p-4 bg-[#0A0C10] rounded-lg shadow-lg flex flex-row">
            <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 mx-auto mb-4 " />
            <div className='flex flex-col justify-center'>
            <p className="text-lg font-semibold text-center text-white">{skill.name}</p>
            <p className="text-sm text-gray-600 text-center font-mono font-semibold hidden md:block">{skill.description}</p>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Skills