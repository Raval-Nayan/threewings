import React from "react";
import "./home.css";

import Cource from "../Cource/cource";


const Home = () => {
  
 
  return (
    <div className="border">
      <div>
         <img className="banner" src="images/banner.jpg" alt="banner" ></img>
      </div>
    <Cource ></Cource>
     
    </div>
  );
};

export default Home;
