import React from "react";
import "./View.scss";
import catVideo2 from "../../assets/videos/Meo.mp4";

const View = () => {
  return (
    <div className="view">
      <video width="750" height="500" controls>
        <source src={catVideo2} type="video/mp4" />
      </video>
    </div>
  );
};

export default View;
