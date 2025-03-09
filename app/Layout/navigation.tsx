"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import dynamic from "next/dynamic";
import { Button } from "../_coreComponent/Button";
const Navigation = () => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <nav className="fixed  left-0 top-0 h-full w-16 flex flex-col justify-around items-center m-0 p-0">
      <div className="flex flex-col items-center">
        <Link
          href={pathname.startsWith("/projects/") ? "/project" : "/"}
          className="block font-bold"
        >
          <div
            className={`font-montserrat transform rotate-270 
              ${
                pathname === "/" || pathname.startsWith("/projects/")
                  ? "text-[var(--text-black)]"
                  : "text-[var(--text-white)]"
              } 
              ${
                pathname !== "/"
                  ? "hover-underline-animation-white"
                  : "hover-underline-animation-white"
              }`}
          >
            {pathname === "/" ? (
              <div className="flex gap-x-4">
                <Button
                  onClick={() => clickHandle("en")}
                  className="cursor-pointer font-bold"
                >
                  {t("English")}
                </Button>
                <Button
                  onClick={() => clickHandle("tr")}
                  className="cursor-pointer font-bold"
                >
                  {t("Turkish")}
                </Button>
              </div>
            ) : pathname.startsWith("/projects/") ? (
              <h1 className="text-[var(--text-white)] font-bold">{t("Project")}</h1>
            ) : (
              <h1 className="text-[var(--text-white)] whitespace-nowrap font-bold">{t("Home")}</h1>
            )}
          </div>
        </Link>
        <div
          className={`w-[2px]  h-26 mt-20 ${
            pathname === "/"
              ? "bg-[var(--text-black)]"
              : "bg-[var(--text-white)]"
          }`}
        />
      </div>
      <div className="transform rotate-270 text-center p-4">
        <p
          className={`text-sm font-bold ${
            pathname === "/"
              ? "text-[var(--text-black)]"
              : "text-[var(--text-white)]"
          }`}
        >
          © 2025 Copyrights
        </p>
      </div>
    </nav>
  );
};
export default dynamic(() => Promise.resolve(Navigation), { ssr: false });
