import useTranslation from "next-translate/useTranslation";
import React from "react";
import { form } from "../utils/data";

const Form = () => {
  const { t, lang } = useTranslation("home");
  const { select } = form;
  return (
    <div className="col-span-3">
      <p className="p-text text-pri_dark capitalize font-medium">
        {t("Headb")}
      </p>
      <p className="p-tiny-text text-black">{t("textb")}</p>
      <form
        id="riderForm"
        className=" grid gap-2 md:gap-5 my-5 md:my-10 p-tiny-text"
      >
        <p className="p-tiny-text text-pri_dark">{t("FillIn")}</p>
        <div className="">
          <input
            required
            type="text"
            placeholder={t("FirstName")}
            name="first_name"
            className="input"
          />
        </div>
        <div className="">
          <input
            required
            placeholder={t("Email")}
            name="email"
            type="email"
            className="input"
          />
        </div>
        <div className="">
          <select
            placeholder={t("Role")}
            required
            name="role"
            className=" w-full px-3 h-[30px] lg:h-[50px] text-color outline-none text- border-pri_dark bg-ter border"
          >
            {select.map((item) => (
              <option key={item.name}>{t(item.name)}</option>
            ))}
          </select>
        </div>
        <button className="button">{t("button2")}</button>
      </form>
    </div>
  );
};

export default Form;
