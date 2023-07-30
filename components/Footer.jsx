import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" rounded-lg  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <div className="flex items-center">
                <img src="/Logo3.png" className="h-8 mr-3" alt=" Logo" />
                <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-white font-cinzel">
                  Pixel Developmenet
                </span>
              </div>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/CTsXBwUz"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/PixelDevlopers"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Pixel™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
