import React from "react";
import "./Video.scss";
import { Link } from "react-router-dom";


const Video = (props) => {
  return (
    <div className="container-video">
      <div className="video">
          <Link to="/video">
            <img src={props.src} alt="videothumbnail" />
          </Link>
      </div>
      <div className="titlevideo">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Video;
