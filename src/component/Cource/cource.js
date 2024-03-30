import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Subject from "../subject/Subject";
import "./cource.css";
import { useGlobalContext } from "../Contex/Contex";

const Cource = () => {
  const { SubjectFun,  subjects, defaultchepter } = useGlobalContext();
  console.log(subjects, "subject");
  console.log( defaultchepter,"default chpter chpter home")
  useEffect(() => {
    SubjectFun();
   
  }, []);
  return (
    <div className="sunject_main_container">
      {subjects.map(
        ({
          id,
          subject_name,
          subject_code,
          description,
          std_id,
          sub_image,

          subject_banner,
        }) => {
          return (
            <NavLink key={id} to={`/chepter/${id}`} >
              {" "}
              <Subject  subject={subject_name} subcode={subject_code}  dec={description} subimg={sub_image} />
            </NavLink>
          );
        }
      )}
    </div>
  );
};

export default Cource;
