import React from "react";

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <section className="grid grid-cols-4 gap-5">
      <div className="timer">{timerDays}</div>
      <div className="timer">{timerHours}</div>
      <div className="timer">{timerMinutes}</div>
      <div className="timer">{timerSeconds}</div>
    </section>
  );
};
Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
export default Timer;
