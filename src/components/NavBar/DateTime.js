import React from "react";

const DateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
  <h1 className="DateTime">Good {timeOfDay} maayan!</h1>
  )
};

export default DateTime;
