import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import DropDownButton from "./DropDownButton";

const HeroSection = () => {
  return (
    <div className="bg-[#0A0C10] flex md:flex-row flex-col  justify-between p-[3rem] items-center">
      <div>
        <h1 className="lg:text-[4rem] md:text-[3rem] text-[2rem] font-mono font-semibold   bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent ">Pixel Developmenet</h1>

        <p className="text-[#EFF3FB] font-Montserrat lg:text-[1.375rem] md:text-[1rem] text-[0.9rem] capitalize lg:leading-[3.125rem] md:leading-[2rem] leading-[2rem]">Offering a wide range of services including Blockchain Development, <br className="hidden md:block"/> Bot Development, Website Development, and UI/UX Design. <br/> Our team excels in delivering end-to-end solutions for software products.</p>
        <div className="flex items-center gap-6 mt-[1rem] mb-[2rem]">
            <DropDownButton />
            <CustomButton buttonText ={'Portfolio'}/>
        </div>
      </div>
      <div className="p-2">
        <img src="/full-hero@2x2.png" className="lg:w-[53.54rem] lg:h-[43.81rem] md:w-[50.54rem] md:h-[40.81rem] object-cover"/>
      </div>
    </div>
  );
};

export default HeroSection;
