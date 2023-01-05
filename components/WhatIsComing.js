import React, { useEffect, useState } from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Language from "./Language";
import { motion } from "framer-motion";

import SocialIcons from "./SocialIcons";
import CountDownTimer from "./CountDownTimer";
const WhatIsComing = () => {
  const { t, lang } = useTranslation("home");
  // ...

  const [timeLeft, setTimeLeft] = useState(CountDownTimer());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CountDownTimer());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // ...

  return (
    <section className={`${styles.background} h-screen  `}>
      <div
        className={`${styles.text} text-white max-w-[1440px] w-[90%] mx-auto`}
      >
        <div className=" md:flex justify-between">
          <div className="md:w-[40%]">
            <div className="flex gap-5 items-end mb-10">
              <>
                <Image
                  src="/icons/Logo.svg"
                  width={100}
                  height={50}
                  alt="Texkoop Logo"
                />
              </>
              <div className="w-[100px]">
                <div className="animate bg-sec"></div>
              </div>
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
          <div className="md:w-[40%] flex flex-end items-end mt-10 md:mt-0">
            <div className=" justify-end text-3xl font-black">
              {timeLeft ? (
                <div className="grid grid-cols-4 gap-5">
                  <div className="timer">{timeLeft.days}</div>
                  <div className="timer">{timeLeft.hours}</div>
                  <div className="timer">{timeLeft.minutes}</div>
                  <div className="timer">{timeLeft.seconds}</div>
                </div>
              ) : (
                <span>Time's up!</span>
              )}
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
