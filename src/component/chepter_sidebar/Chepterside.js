import React, { useEffect } from "react";
import "./chepterside.css";
import Chepter from "../Chepter/Chepter";
import { useGlobalContext } from "../Contex/Contex";

const url = "http://instimattress.thethreewings.com/api/get_subtopic";
const Chepterside = () => {
  
  const { topic, SubTopicFun, TopicFilter  } = useGlobalContext();





 


  return (
    <div className="chepter_sidebar_container shadow">
      <div className="  ">
        {topic.map(({ topic, id }) => {
          console.log(id, "id");
          return (
            <button
              key={id}
              className="rounded-pill mx-2  sidebar_chepter  my-1 "
              onClick={() => {
                SubTopicFun(`${url}?topic_id=${id}`);
                TopicFilter(id);
              }}
            >
              <Chepter topic_chepter={topic} key={id}></Chepter>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Chepterside;
