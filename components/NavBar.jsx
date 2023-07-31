"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const navlinks = [
  { link: "#portfolio", value: "Work" },
  { link: "#services", value: "Services" },
  { link: "https://discord.gg/CTsXBwUz", value: "Discord" },
  { link: "https://t.me/PixelDevlopers", value: "Telegram" },
  { link: "#contact", value: "Want Website?" },
];

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <div className="bg-[#0A0C10] flex flex-row justify-between items-center h-[96px] border-b-[1px] border-solid border-gray-custom  [backdrop-filter:blur(25px)]">
        <div className="md:ml-[150px]">
          <Link href="/" className="flex items-center gap-3">
            <img src="/Logo3.png" alt="Logo" />
            <p className="hidden lg:block text-2xl font-semibold whitespace-nowrap text-white font-cinzel hover:text-yellow-500">
              Pixel Developmenet
            </p>
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="lg:flex gap-[5px] p-4 hidden">
          {navlinks.map((link, index) => (
            <ul key={index} className="mr-[2rem]">
              <a
                href={link.link}
                target={link.link.startsWith("#") ? "" : "_blank"}
                className="mr-2 text-[16px] font-medium text-white font-cinzel hover:text-yellow-400"
              >
                {link.value}
              </a>
            </ul>
          ))}
        </div>
        {/* Mobile Nav */}
        <div className="lg:hidden gap-[5px] p-4 flex">
          {/* Mobile Navigation Button */}
          <button onClick={toggleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Links (Dropdown) */}
      <Transition
        show={showMobileNav}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="lg:hidden gap-[5px] p-4 flex flex-col items-center bg-[#0A0C10]"
          >
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                className="mb-2 text-[16px] font-medium text-white font-cinzel"
              >
                {link.value}
              </a>
            ))}
          </div>
        )}
      </Transition>
    </>
  );
};

export default NavBar;
