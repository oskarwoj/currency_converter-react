import React from "react";
import useCurrentDate from "./useCurrentDate";
import {StyledClock} from  "./styled"

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

  return <StyledClock> {formatDate(date)} </StyledClock>;
};

export default Clock;
