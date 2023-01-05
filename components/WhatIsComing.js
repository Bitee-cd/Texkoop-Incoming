import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Language from "./Language";

import SocialIcons from "./SocialIcons";
const WhatIsComing = () => {
  const { t, lang } = useTranslation("home");

  return (
    <section className={`${styles.background} h-screen  `}>
      <div
        className={`${styles.text} text-white max-w-[1440px] w-[90%] mx-auto`}
      >
        <div className=" md:flex justify-between">
          <div className="md:w-[45%]">
            <div className="flex gap-5 items-end mb-10">
              <>
                <Image
                  src="/icons/Logo.svg"
                  width={100}
                  height={50}
                  alt="Texkoop Logo"
                />
              </>
              <div className="animate w-[200px] bg-sec h-[10px] items-end "></div>
            </div>
            <div>
              <p className="uppercase h1-text font-black">
                {t("Headi")}
                <br></br> {t("Headii")}
              </p>
              <p className="p-text my-7 font-light">{t("texta")}</p>
              <button className="button">{t("button")}</button>
            </div>
          </div>
          <div className="md:w-[45%] flex items-end mt-10 md:mt-0">
            <div className="grid grid-cols-4 justify-center gap-5 text-3xl font-black">
              <div className="timer">00</div>
              <div className="timer">00</div>
              <div className="timer">00</div>
              <div className="timer">00</div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-10 text-white lg:flex justify-between hidden  ">
          <SocialIcons />
          <div>
            <Language />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsComing;
