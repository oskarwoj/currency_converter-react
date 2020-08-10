import React from "react";
import useCurrentDate from "./useCurrentDate";
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
  const date = useCurrentDate();

  return <p className="form__clock"> {formatDate(date)} </p>;
};

export default Clock;
