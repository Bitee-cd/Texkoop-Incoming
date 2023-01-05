import React from "react";

const CountDownTimer = () => {
  // ...

  let year = new Date().getFullYear();
  let difference = +new Date(`01/21/2023`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;

  // ...
};

export default CountDownTimer;
