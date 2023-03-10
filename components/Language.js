import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./../styles/Home.module.css";

const Language = () => {
  const [locale, setLocale] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className={`${styles.slideIn} cursor-pointer`}
        onMouseOver={() => setLocale(!locale)}
        onMouseOut={() => setLocale(locale)}
      >
        {locale ? (
          <Link href={`${router.asPath}`} locale="en-US">
            <div className="flex gap-1">
              <img
                src="https://flagcdn.com/gb.svg"
                alt="English"
                className="cursor-pointer"
              />
              EN
            </div>
          </Link>
        ) : (
          <Link href={`${router.asPath}`} locale="fr">
            <div className="flex gap-1">
              <img
                src="https://flagcdn.com/fr.svg"
                alt="French"
                className="cursor-pointer"
              />
              FR
            </div>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default Language;
