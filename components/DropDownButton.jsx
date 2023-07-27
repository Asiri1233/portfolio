"use client"
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const options = [
  { label: "Telegram", link: "https://telegram.org" },
  { label: "Discord", link: "https://discord.com" },
];

const DropDownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left border-yellow-500 border">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-[0.94rem] bg-[transparent] md:h-[51px] top-[0.13rem]  rounded-8xs  md:w-[10.63rem] p-[7px] flex flex-row box-border items-center justify-center cursor-pointer text-white"
          >
            Contact Us
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="origin-top-right absolute mt-2 w-[10.63rem] rounded-md shadow-lg border-yellow-700 ring-1 ring-black ring-opacity-5"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option) => (
            <a
              key={option.label}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOptionClick(option)}
              className="block px-5 py-2 text-sm text-white  hover:text-white"
              role="menuitem"
            >
              {option.label}
            </a>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default DropDownButton;
