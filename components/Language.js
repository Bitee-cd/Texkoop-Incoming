import React, { useState } from "react";

const Language = () => {
  const [locale, setLocale] = useState(false);
  console.log(locale);
  return (
    <div className={``}>
      {locale ? (
        <div>
          <img
            src="https://flagcdn.com/gb.svg"
            width="30"
            alt="UK English"
            className="cursor-pointer"
          />
        </div>
      ) : (
        <div>
          <img
            src="https://flagcdn.com/fr.svg"
            width="30"
            alt="French "
            onMouseEnter={setLocale(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Language;
