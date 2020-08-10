import React, { useState, useEffect } from "react";
import "./style.css";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="form__clock"> {formatDate(date)} </p>;
};
export default Clock;
