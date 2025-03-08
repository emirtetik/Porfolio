"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useFetchProject from "../hook/useFetchProject";
import { LuLoaderPinwheel } from "react-icons/lu";
import dynamic from "next/dynamic";

const Project = () => {
  const { t } = useTranslation();
  const { posts, loading, error } = useFetchProject();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--text-gray)]">
        <LuLoaderPinwheel className=" text-white animate-spin" size={80} />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen pl-16 sm:pl-12 md:pl-12 lg:pl-16 xl:pl-28 text-[var(--text-white)] bg-[var(--text-gray)] overflow-hidden">
      <div className="w-full md:w-2/5 p-6 flex flex-col justify-end">
        <div>
          <h1 className="font-semibold screen-size">{t("Project")}</h1>
          <p className="mt-4">{t("Project text")}</p>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col h-screen overflow-y-auto bg-[var(--background)] text-[var(--text-black)]">
        <div className="m-4 sm:m-8 md:m-16">
          <div className="p-6 sm:p-8 md:p-10">
            <ul className="gap-y-6 sm:gap-y-8 md:gap-y-10 flex flex-col">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/projects/${post.slug}`}>
                    <h1 className="font-prata  transition-all duration-500 ease-out transform hover:translate-x-4 hover:-skew-x-6 xl:text-[7rem] xl:leading-[7rem] lg:text-[6rem] lg:leading-[6rem] md:text-[5.3rem] md:leading-[5.3rem] sm:text-[4rem] sm:leading-[4rem] max-sm:text-[2.5rem] max-sm:leading-[3rem]">
                      {post.title}
                    </h1>
                  </Link>
                  <p className="indent-4 text-[var(--text-white)] text-sm sm:text-base md:text-lg">
                    - {post.description}
                  </p>
                  <p className="indent-4 text-[var(--text-white)] text-sm sm:text-base md:text-lg">
                    - {post.date}
                  </p>
                </li>
              ))}
              <li>
                <Link href={"/contact"}>
                  <h1 className="font-prata  uppercase  transition-all duration-500 ease-out transform hover:translate-x-4 hover:-skew-x-6 xl:text-[7rem] xl:leading-[7rem] lg:text-[6rem] lg:leading-[6rem] md:text-[5.3rem] md:leading-[5.3rem] sm:text-[4rem] sm:leading-[4rem] max-sm:text-[2.5rem] max-sm:leading-[3rem]">
                    {t("Contact")}
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Project), { ssr: false });
