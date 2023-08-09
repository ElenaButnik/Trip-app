import { addLeadingZero, convertMs } from "components/helpers/Timer";
import React, { useState } from "react";
import css from "./Timer.module.scss";

const initialTimerState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Timer = ({ start }) => {
  const [timerState, setTimerState] = useState(initialTimerState);
  // const { days, hours, minutes, seconds } = timerState;

  const timerId = setInterval(() => {
    const currentTime = Date.now();

    const dateObject = new Date(start);
    const selectedTime = dateObject.getTime();

    // const selectedTime = new Date(milliseconds);

    const ms = selectedTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(ms);

    if (ms < 1000 || ms < 0) {
      clearInterval(timerId);
    } else {
      setTimerState({ days, hours, minutes, seconds });
    }
  }, 1000);

  return (
    <div className={css.timer}>
      <div className={css.field}>
        <span className={css.value} data-days>
          {addLeadingZero(timerState.days)}
        </span>
        <span className={css.label}>Days</span>
      </div>
      <div className={css.field}>
        <span className={css.value} data-hours>
          {addLeadingZero(timerState.hours)}
        </span>
        <span className={css.label}>Hours</span>
      </div>
      <div className={css.field}>
        <span className={css.value} data-minutes>
          {addLeadingZero(timerState.minutes)}
        </span>
        <span className={css.label}>Minutes</span>
      </div>
      <div className={css.field}>
        <span className={css.value} data-seconds>
          {addLeadingZero(timerState.seconds)}
        </span>
        <span className={css.label}>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
