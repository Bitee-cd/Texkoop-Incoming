import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LanguageMobile = () => {
  const router = useRouter();
  let lang = router.locale;
  const [locale, setLocale] = useState(lang);
  useEffect(() => {
    setLocale(router.locale);
  }, [router]);

  return (
    <div className="relative">
      <div>
        {locale == "fr" && (
          <Link href={`${router.asPath}`} locale="en-US">
            <div className="flex gap-1 font-light">
              <img
                src="https://flagcdn.com/gb.svg"
                width="30"
                alt="English"
                className="cursor-pointer"
              />
              EN
            </div>
          </Link>
        )}
        {locale == "en-US" && (
          <Link href={`${router.asPath}`} locale="fr">
            <div className="flex gap-1 font-light">
              <img
                src="https://flagcdn.com/fr.svg"
                width="30"
                alt="French"
                className="cursor-pointer"
              />
              FR
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LanguageMobile;
