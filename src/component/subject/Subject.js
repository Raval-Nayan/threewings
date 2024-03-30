import React from "react";
import "./subject.css";

const Subject = ({ subject, subcode, dec, subimg }) => {
  return (
    <div className="subject_box">
      <div class="card">
        {" "}
        <img
          className="img-fluid w-100 h-100 rounded"
          src={subimg}
          onError={(event)=>{event.target.src="../images/splash-screen.png"; event.onerror = null;}}
          alt="img"
        ></img>
        <label>{subject}</label>
      </div>
    </div>
  );
};

export default Subject;
