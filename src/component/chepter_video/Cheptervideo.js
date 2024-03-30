import React, { useEffect, useState } from "react";
import "./cheptervideo.css";
import Videocard from "../video/Videocard";
import { useGlobalContext } from "../Contex/Contex";
import { NavLink } from "react-router-dom";


const Cheptervideo = () => {
 
  const { topic, DefaultChepter,  } = useGlobalContext();
  const chepterIds = topic.map((item) => item.id);
  const chpterid = chepterIds.length > 0 ? chepterIds[0] : null;
  console.log( chpterid,"map id")
  
    useEffect(()=>{
      
      if (chpterid) {
        DefaultChepter(`http://instimattress.thethreewings.com/api/get_subtopic?topic_id=${chpterid}`);
        console.log("api call")
      }
    },[chpterid])

  
  const {  subtopic, chapter , defaultchepter} = useGlobalContext();
console.log(defaultchepter,"default")
console.log(chapter,"chepter")
  return (
    <div className="w-100 shadow">
      <div className="rounded mx-1  my-1 bg-black d-flex justify-content-center align-items-center">
        <img
          className=" hero-image"
          src=""
          alt="img"
          onError={(event) => {
            event.target.src = "../images/splash-screen.png";
            event.onerror = null;
          }}
        ></img>
      </div>
      {chapter.map(({ id, topic, description, subject }) => {
        return (
          <div
            key={id}
            className="second_container rounded d-flex justify-content-between align-items-center p-1 mt-2"
          >
            <div>
              Cource->{subject.standard.name}->{subject.name}
            </div>
            <div>
              {" "}
              {topic}:{description}{" "}
            </div>
          </div>
        );
      })}

      <div className=" d-flex flex-column ">
        {subtopic.map(
          ({
            id,
            sub_topic,
            file_path,
            description,
            video_link,
            stopic_image,
          }) => {
            return (
              <Videocard
                key={id}
                id={id}
                sub={sub_topic}
                video={video_link}
                pdf={file_path}
                img={stopic_image}
                dec={description}
              />
            );
          }
        )}
      </div>

      <div className=" d-flex flex-column ">
        {defaultchepter.map(
          ({
            id,
            sub_topic,
            file_path,
            description,
            video_link,
            stopic_image,
          }) => {
            return (
              <Videocard
              key={id}
              id={id}
              sub={sub_topic}
              video={video_link}
              pdf={file_path}
              img={stopic_image}
              dec={description}
            />
            );
          }
        )}
      </div>

  
    </div>
  );
};

export default Cheptervideo;
