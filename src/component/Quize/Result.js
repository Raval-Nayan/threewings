import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Contex/Contex";

const Result = () => {
  const { setStart, setExit, setCorrect, setCurrent, correct } =
    useGlobalContext();
  return (
    <div className="text-center">
      <div className="text-center">
        {" "}
        <h1>Your Score is {correct}</h1>
      </div>
      <NavLink
        to="/quizecomponent"
        onClick={() => {
          setStart(true);
          setExit(true);
          setCorrect(0);
          setCurrent(0);
        }}
      >
        Quize
      </NavLink>
      <NavLink
        to="/home"
        onClick={() => {
          setStart(true);
          setExit(true);
          setCorrect(0);
          setCurrent(0);
        }}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Result;
