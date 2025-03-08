"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pl-12 sm:pl-20 md:pl-20 lg:pl-16 xl:pl-28 flex flex-col justify-center min-h-screen text-[var(--text-white)] bg-[var(--text-gray)] overflow-hidden">
      <h1
        className="font-prata lg:text-[117px] uppercase lg:leading-[1em] md:text-[100px] md:leading-[100px] sm:text-[60px] sm:leading-[52px] max-sm:text-5xl max-sm:leading-[72px] transition-all duration-500 ease-out transform hover:translate-x-4 hover:-skew-x-6"
      >
        {t("Contact")}
      </h1>
      <div>
      <p className="mb-4 text-sm sm:text-base md:text-lg">{t("Contact text")}</p>
        <ul className="text-sm sm:text-base md:text-lg">
          <li>
            <Link
              target="_blank"
              className="hover-underline-animation-white"
              href="mailto:emirtetik.41@hotmail.com"
            >
              Email: emirtetik.41@hotmail.com
            </Link>
          </li>
          <li className="hover-underline-animation-white">
            {t("Phone")}: +90 546 609 62 31
          </li>
          <li>
            <Link
              target="_blank"
              href="/cv/EmirTetik.cv.pdf"
              download
              className="hover-underline-animation-white"
            >
              {t("CV")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Contact), { ssr: false });