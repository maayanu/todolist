import React from "react";
import DateTime from "./DateTime";
import Hamburger from "../NavBar/Hamburger";


const TopOfPage = () => {
  return (
    <div className="TopOfPage">
      <DateTime />
      <Hamburger />
    </div>
  );
};

export default TopOfPage;
