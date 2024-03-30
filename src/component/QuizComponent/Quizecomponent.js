import React, { useEffect } from "react";
import "./quizecomponent.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Contex/Contex";
import Quize from "../Quize/Quize";
import Result from "../Quize/Result";
import Demo from './demo.pdf'

const Quizecomponent = () => {
  const navigate = useNavigate();
  const {
    quizedata,
    chapter,
    subtopic,
    defquizedata,
    start,
    exit,
    setStart,
    setExit,
  } = useGlobalContext();

  console.log(quizedata, "quize,data");
  console.log(subtopic, " subtopic data");

  console.log(exit, "exit baba");

  const pdfFiles = quizedata.filter((item) => item.file_path);
  const VideoFiles = quizedata.filter((item) => item.video_link);

  const pdfFiless = defquizedata.filter((item) => item.file_path);
  const VideoFiless = defquizedata.filter((item) => item.video_link);

  console.log(pdfFiles, "pdf");
  const openPdf = () => {
    const pdfWindow = window.open("", "_blank", "toolbar=no,menubar=no");

    if (pdfWindow) {
        pdfWindow.document.write(`
            <html>
            <head>
                <title>Embedded PDF Viewer</title>
                <style>
                    body {
                        margin: 0;
                        overflow: hidden; /* Prevent scrolling */
                    }
                </style>
            </head>
            <body>
                <embed src="${Demo  + "#toolbar=0"}" type="application/pdf" width="100%" height="100%" />
                <script>
                    // Disable context menu to prevent printing
                    document.addEventListener('contextmenu', (event) => event.preventDefault());
                    // Disable keyboard shortcuts (e.g., Ctrl+P) to prevent printing
                    document.addEventListener('keydown', (event) => {
                        if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
                            event.preventDefault();
                        }
                    });
                </script>
            </body>
            </html>
        `);
        pdfWindow.document.close();
    } else {
        console.error('Failed to open new window');
    }
  };

  const openVideo = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="w-100 ">
      {exit === true ? (
        start ? (
          <div className="">
            <img className="img_sizes" src="images/banner.jpg" alt="img" />
          </div>
        ) : (
          <Quize />
        )
      ) : (
        <Result />
      )}

      {start
        ? chapter.map(({ id, topic, description, subject }) => {
            return (
              <div
                key={id}
                className="second_container rounded d-flex justify-content-between align-items-center p-1 mt-2"
              >
                <div>
                  Cource->{subject.standard.name}->{subject.name}
                </div>
                <div>
                  {topic}:{description}
                </div>
              </div>
            );
          })
        : null}

      {start ? (
        <div className="d-flex flex-column">
          <div className="quize_function_style mt-2">
            <div className="border p-5 text-white bg-danger rounded shadow">
              VHM SPECIAL STARTING
            </div>
            {pdfFiles.map((item, index) => (
              <div
                key={index}
                onClick={() => openPdf(item.file_path)}
                className="border p-5 text-white bg-success rounded shadow"
              >
                PDF
              </div>
            ))}
            {pdfFiless.map((item, index) => (
              <div
                key={index}
                onClick={() => openPdf(item.file_path)}
                className="border p-5 text-white bg-success rounded shadow"
              >
                PDF
              </div>
            ))}
            {VideoFiles.map((item, index) => (
              <div
                key={index}
                onClick={() => openVideo(item.video_link)}
                className="border p-5 text-white bg-warning rounded shadow"
              >
                VIDEO
              </div>
            ))}
            {VideoFiless.map((item, index) => (
              <div
                key={index}
                onClick={() => openVideo(item.video_link)}
                className="border p-5 text-white bg-warning rounded shadow"
              >
                VIDEO
              </div>
            ))}
            <div className="border p-5 text-white bg-success rounded shadow">
              HELP
            </div>
            <div className="border p-5 text-white bg-info rounded shadow">
              REFERENCE
            </div>
            <div className="border p-5 text-white bg-primary rounded shadow">
              VHM SPECIAL ENDING
            </div>
          </div>
          <div className="w-100 mt-2">
            <NavLink to="/quize">
              <button
                className="btn btn-primary p-3 w-100"
                onClick={() => {
                  setStart(false);
                }}
              >
                Quize
              </button>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quizecomponent;
