import React from "react";

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const startNumber = 9;
  return (
    <>
      <section className="grid grid-cols-4 gap-5">
        <div onChange={() => console.log("yes")} className="timer">
          {timerDays}
        </div>
        <div className="timer">{timerHours}</div>
        <div className="timer">{timerMinutes}</div>
        <div onChange={() => console.log("yes")} className="timer">
          {timerSeconds}
        </div>
      </section>
      {/* <section>
        <h2>second part</h2>
        <div className="flip_card flip">
          <div className="top">{startNumber}</div>
          <div className="bottom">{startNumber}</div>
        </div>
      </section> */}
    </>
  );
};
Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Timer;
