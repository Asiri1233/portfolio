import React from "react";

const CustomButton = ({ containText, buttonText }) => {
  return (
    <>
      <div>
        <div>
          <a href="#portfolio" className=" bg-[transparent]  scroll-behavior-smooth  rounded-8xs [background:linear-gradient(-64.62deg,_#ffe5a1,_#bf841a_50.52%,_#ffcd74)] md:w-[10.63rem] p-[9px] md:p-[0px]  flex flex-row box-border items-center justify-center cursor-pointer">
            <div className=" md:text-[1.13rem] text-[0.9rem] tracking-[-0.02em]  md:leading-[3.13rem] uppercase font-medium font-montserrat text-gray-200 text-justify">
              {buttonText}
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CustomButton;