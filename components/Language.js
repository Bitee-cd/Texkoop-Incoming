import React, { useState } from "react";

const Language = () => {
  const [locale, setLocale] = useState(false);
  console.log(locale);
  return (
    <div className={``}>
      {locale ? (
        <div className="flex gap-1">
          <img
            src="https://flagcdn.com/gb.svg"
            width="30"
            alt="UK English"
            className="cursor-pointer"
          />
          EN
        </div>
      ) : (
        <div className="flex gap-1">
          <img
            src="https://flagcdn.com/fr.svg"
            width="30"
            alt="French "
            onMouseEnter={setLocale(true)}
            className="cursor-pointer"
          />
          FR
        </div>
      )}
    </div>
  );
};

export default Language;
