import React, { useState, useEffect } from "react";
import "./style.css";

const defaultDate = {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const Clock = () => {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleDateString(undefined, defaultDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = new Date().toLocaleDateString(undefined, defaultDate);
      setDateTime(newDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="form__clock"> {dateTime} </p>;
};
export default Clock;
