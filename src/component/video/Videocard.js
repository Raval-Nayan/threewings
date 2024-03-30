import React from "react";
import "./Videocard.css";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Contex/Contex";

const Videocard = ({ id, sub, img, dec, pdf, video }) => {
  const { QuizeFun} = useGlobalContext();

  const openPdf = () => {
    window.open(pdf, "_blank");
  };
  const openVideo = () => {
    window.open(video, "_blank");
  };
  return (
    <div className="d-flex justify-content-center    mt-2">
      <div className="videocard shadow-lg d-flex justify-content-between  p-2">
        <NavLink
          to="/quizecomponent"
          className="text-decoration-none"
          onClick={() => {
            console.log(id,"default video")
            QuizeFun(id);
          }}
        >
          <div className="d-flex justify-content-start align-items-center gap-2">
            <img
              className="img-fluid img_size rounded"
              src={img}
              alt="img"
              onError={(event) => {
                event.target.src = "../images/splash-screen.png";
                event.onerror = null;
              }}
            ></img>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h2>{sub}</h2>
              <p>{dec}</p>
            </div>
          </div>
        </NavLink>
        <div className="  gap-2 d-flex justify-start align-items-start  ">
          <div className="textpdf" onClick={openPdf}>
            PDF
          </div>
          <div className="textpdf" onClick={openVideo}>
            VIDEO
          </div>
          <div>
            <NavLink to="/quizecomponent">QUIZ</NavLink>
          </div>
          <div>REFERENCE</div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
