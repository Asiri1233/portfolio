"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectCards = ({ projectImage, projectName, projectDescription }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  const handleScroll = () => {
    const cardOffsetTop = cardRef.current.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > cardOffsetTop) {
      controls.start({ y: 0, opacity: 1 });
    }
  };

  useEffect(() => {
    handleScroll(); // Check initial state when the component mounts
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm border-yellow-500 rounded-lg shadow bg-black border-2 md:m-0 m-4"
      style={{ padding: "10px" }} // Add padding to the outside of the component
    >
      <a href="#">
        <img
          className="rounded-t-lg h-48 sm:h-56 w-full object-cover"
          src={projectImage}
          alt=""
        />
      </a>
      <div className="p-4 sm:p-5">
        <a href="#">
          <h5 className="mb-2 md:text-2xl text-lg font-bold tracking-tight text-white font-Montserrat">
            {projectName}
          </h5>
        </a>
        <p className="mb-3 text-sm sm:text-base font-normal text-gray-400">
          {projectDescription}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm sm:text-base font-medium text-center text-white rounded-lg hover:bg-yellow-500 bg-yellow-400"
        >
          Visit Now
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCards;