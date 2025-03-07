"use client";
import React from "react";
import { NavData } from "../constant";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import Chatbot from "../components/Chatbot";
import { useTranslation } from "react-i18next";
export default function Home() {
    const { t } = useTranslation();
  
  return (
    <div className="pl-10 sm:pl-10 md:pl-12 lg:pl-16 xl:pl-28 flex flex-col md:flex-row h-screen p-4 sm:overflow-auto lg:overflow-hidden">

    <div className="md:w-2/5 p-6 flex flex-col space-y-6">
      <Chatbot />
      <div className="p-2">
        <h1 className="text-black text-3xl md:text-4xl font-bold">Emir Tetik</h1>
        <h3 className="text-black text-xl md:text-2xl">Frontend & React Native Developer</h3>
        <p className="mt-4 text-sm md:text-base ">{t("Home text")}</p>
        <div className="w-40 h-[1px] bg-black my-3" />
        <div className="flex gap-6">
          <Link href="https://github.com/emirtetik" target="_blank">
            <FaGithub className="text-gray-600 text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://stackoverflow.com/users/20142369/frontmir" target="_blank">
            <FaStackOverflow className="text-gray-600 text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/emir-tetik/" target="_blank">
            <FaLinkedin className="text-gray-600 text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
        </div>
      </div>
    </div>
    <div className="md:w-3/5 flex flex-col justify-center space-y-4">
      {NavData.map((item) => (
        <div key={item.id} className="mb-2 md:mb-4">
          <Link href={item.url}>
            <div className="font-prata lg:text-[158px] lg:leading-[159px] text-center uppercase transition-all duration-500 ease-out transform hover:translate-x-5 hover:-skew-x-6 
    md:text-[70px] md:leading-[70px] sm:text-6xl sm:leading-[52px] max-sm:text-3xl max-sm:leading-[32px]">
              {t(item.name)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}
