import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateTemplate = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const newDate = new Date().toLocaleDateString("pl-PL", dateTemplate);
      setDateTime(newDate);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="form__clock"> {dateTime} </p>;
};
export default Clock;
