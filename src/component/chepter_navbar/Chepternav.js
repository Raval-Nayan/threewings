import React from "react";
import "./chepternav.css";
import { NavLink } from "react-router-dom";

const Chepternav = ({Link}) => {
  return (
    <div className="chepter_nav_container">
      <div className="d-flex justify-content-center align-items-center gap-2 ">
        <img className="img" src="../images/splash-screen.png" alt="img"></img>
        <h2 className="nav_texts">VHM ACEDEMY</h2>
      </div>

      <div className="">
        <NavLink className="text-decoration-none" to={`/${Link}`}>
          {" "}
          <span className="back_text">{`< Back`}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Chepternav;
