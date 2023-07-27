"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {AiOutlineCopy} from 'react-icons/ai'

const CTA = () => {
  const [discordTag, setDiscordTag] = useState(".pixelasiri");
  const [telegramTag, setTelegramTag] = useState("@WRetoscker");
  const [showAlert, setShowAlert] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleCopyToClipboard = (value) => {
    if (!showAlert) {
      navigator.clipboard.writeText(value);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000); // Reset showAlert after 1 second
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-black flex flex-col items-center justify-center w-[90%] md:w-[60rem] rounded-xl overflow-hidden border border-yellow-400"
      ref={ref}
    >
      <div className="w-full md:flex md:items-center">
        <div className="relative w-full md:w-[50%] md:h-[26rem]">
          {/* Picture on the left side (50% width for desktop) */}
          <img
            src="/zeus.webp"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-90"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            {/* ... Your content on top of the image ... */}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[50%] flex flex-col items-center space-y-4 p-4 md:p-8"
        >
          <p className="text-white font-Montserrat text-2xl">Contact Us</p>
          <input
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full p-4 text-white bg-transparent border-b border-white focus:outline-none placeholder-white cursor-pointer"
            placeholder="Discord"
            value={discordTag}
            onFocus={() => handleCopyToClipboard(discordTag)}
            readOnly // To prevent the user from changing the value
          />
            {/* <AiOutlineCopy  /> */}
          <input
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full p-4 text-white bg-transparent border-b border-white focus:outline-none placeholder-white cursor-pointer"
            placeholder="Telegram"
            value={telegramTag}
            onFocus={() => handleCopyToClipboard(telegramTag)}
            readOnly // To prevent the user from changing the value
          />
          <div className="flex flex-row gap-4">
          <a
          href="https://t.me/PixelDevlopers"
          target="_blank"
          type="button"
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90  focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          <img
            itemProp="image"
            className="w-5 h-5 mr-2"
            src="https://freelogopng.com/images/all_img/1683045226telegram-logo-black.png"
            width="100"
            height="100"
            alt="@Sellix"
          />
          Telegram
        </a>
          <a
          href="https://discord.gg/CTsXBwUz"
          target="_blank"
          type="button"
          className="text-white bg-[#404DED] hover:bg-[#404DED]/90  focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
        >
          <img
            itemProp="image"
            className="w-5 h-5 mr-2 object-contain"
            src="/discord.png"
            width="100"
            height="100"
            alt="@Sellix"
          />
          Discord
        </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTA;
