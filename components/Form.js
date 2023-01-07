import useTranslation from "next-translate/useTranslation";
import React from "react";
import { form } from "../utils/data";

const Form = () => {

  

    
  const createWaitlist = async (form_values) => {
    const waitlist = await fetch(`/api/forms/waitlist/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    });
    //it returns status of 201 if it was successfull and 400 if not successfull
    console.log("response status", waitlist.status);
    if (waitlist.status === 201) {
      alert("You have been added to our waitlist")
    }
    else{
      alert("Something went wrong")
    }
  };

  
  
  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    console.log(form_values);
    createWaitlist(form_values);
  };
  
  const { t, lang } = useTranslation("home");
  const { select } = form;
  return (
    <div className="col-span-3">
      <p className="p-text text-pri_dark capitalize font-[600]">{t("Headb")}</p>
      <p className="p-tiny-text text-black">{t("textb")}</p>
      <form onSubmit={submitHandler}
        id="riderForm"
        className=" grid gap-2 md:gap-5 my-5 md:my-10  p-tiny-text"
      >
        <p className="p-tiny-text text-pri_dark font-medium">{t("FillIn")}</p>
        <div className="">
          <input
            required
            type="text"
            placeholder={t("FirstName")}
            name="name"
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
            required
            name="role"
            className=" w-full px-3 h-[30px] lg:h-[50px] text-color outline-none  border-pri_dark bg-ter border"
          >
            <option value="" disabled selected>
              {t("Role")}
            </option>
            {select.map((item) => (
              <option key={item.name} value={t(item.name)}>{t(item.name)}</option>
            ))}
          </select>
        </div>
        <div>
          <button type={'submit'} className="button">{t("button2")}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
