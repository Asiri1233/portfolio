import React from 'react';

const TeamDes = () => {
  const insights = [
    {
        title: 'Intuitive Design',
        description: 'Crafting User-Centric Interfaces for Seamless Experiences.',
        image: '/web-design-ex.png', // Add the image URL for the "Intuitive Web Design" insight
      },
      {
        title: 'Artistic Design',
        description: 'Bringing Ideas to Life with Visually Stunning Concepts.',
        image: '/graphic-design-ex.jpeg', // Add the image URL for the "Artistic Graphic Design" insight
      },
      {
        title: 'Innovative Development',
        description: 'Building Future-Proof Solutions with Cutting-Edge Technologies.',
        image: '/web-dev-ex.jpeg', // Add the image URL for the "Innovative Web Development" insight
      },
  ];
  // Function to shuffle the insights randomly

  return (
    <div className="bg-navy text-white py-10 flex justify-center items-center  mt-20 mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent  md:p-12 md:mr-4 font-bold md:text-[1.75rem] text-1xl text-center uppercase pb-3 font-cinzel text-centr">
         About Us
        </h1> */}
          <div className="flex flex-wrap justify-center gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="rounded-full p-4 w-24 h-24 flex items-center justify-center mb-2 object-cover"
                  src={insight.image} // Use the image URL from the array
                  alt={insight.title} // Add alt text for accessibility
                />
                <p className="text-lg font-semibold">{insight.title}</p>
                <p className="text-sm text-gray-300">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDes;
