"use client";
import React from "react";
import { NavData } from "../constant";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import Chatbot from "../components/Chatbot";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
const Home = () => {
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
            <FaGithub className="text-[var(--text-gray)] text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://stackoverflow.com/users/20142369/frontmir" target="_blank">
            <FaStackOverflow className="text-[var(--text-gray)] text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/emir-tetik/" target="_blank">
            <FaLinkedin className="text-[var(--text-gray)] text-2xl md:text-3xl hover:text-black transition-colors" />
          </Link>
        </div>
      </div>
    </div>
    <div className="md:w-3/5 flex flex-col justify-center space-y-4">
      {NavData.map((item) => (
        <div key={item.id} className="mb-2 md:mb-4">
          <Link href={item.url}>
            <div className="font-prata text-center uppercase transition-all duration-500 ease-out transform hover:translate-x-5 hover:-skew-x-6 
   xl:text-[10rem] xl:leading-[10rem] lg:text-[8rem] lg:leading-[8rem] md:text-[4.3rem] md:leading-[4.3rem] sm:text-[3.7rem] sm:leading-[3.7rem] max-sm:text-[2rem] max-sm:leading-[2rem]">
              {t(item.name)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });
