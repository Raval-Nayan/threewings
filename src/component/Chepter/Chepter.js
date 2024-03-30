import React from "react";
import "./chepter.css";


const Chepter = ({topic_chepter}) => {

 
  return (
    <div  >
      <div className="chepter_box   pt-2">
      <p className="text-center  p-2">{topic_chepter}</p>
      
      </div>
    </div>
  );
};

export default Chepter;
