"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ServiceCard = ({service}) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.2, // Adjust the threshold to control when the animation triggers
      });
    
      return (
        <motion.div
          ref={ref}
          className="hover:cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-black rounded-lg shadow-lg p-4 border-2 border-yellow-500" id='services'>
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-white font-bold mt-4 font-Montserrat">
              {service.title}
            </h2>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        </motion.div>
  )
}

export default ServiceCard