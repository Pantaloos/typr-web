import "./Timer.scss";
import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const { timeoutHandler = () => {} } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  const timerContainerClass = `${props.customStyle} timer-container`;

  useEffect(() => {
    // let myInterval = setInterval(() => {
    //   if (seconds > 0) {
    //     setSeconds(seconds - 1);
    //   }
    //   if (seconds === 0) {
    //     if (minutes === 0) {
    //       clearInterval(myInterval);
    //       timeoutHandler();
    //     } else {
    //       setMinutes(minutes - 1);
    //       setSeconds(59);
    //     }
    //   }
    // }, 1000);
    // return () => {
    //   clearInterval(myInterval);
    // };
  });

  return (
    <div className={timerContainerClass}>
      {minutes === 0 && seconds === 0 ? null : (
        <h1 className="my-h">
          {initialMinute}:
          {initialSeconds < 10 ? `0${initialSeconds}` : initialSeconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
