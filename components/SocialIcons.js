import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcons = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <p className="p-text">Texkoop {date}</p>
      <div className="flex items-center gap-5 mt-2">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default SocialIcons;
