import React, { useState } from "react";
import "./Quize.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Contex/Contex";

const Quize = () => {
  const [ans, setAns] = useState("");
  const navigate=useNavigate()

  const { setStart, current , correct, setCurrent,setCorrect ,exit ,setExit} = useGlobalContext();
  console.log(exit)
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["W", "H2O", "O", "H"],
      answer: "H2O"
    }
  ];

  console.log(quizData[current]);

  const saveHandler = () => {
    if (quizData[current].answer === ans) {
      setCorrect( correct+1);
      setAns("")
    }

    if(current+1 === quizData.length){
     
     

      navigate("/result")
    }else{
      setCurrent(current+1)
      console.log("abhibhi chal raha he")
    }
   
  };

  const resetQuize=()=>{
    setCorrect( 0);
    setCurrent(0)
  }

  return (
    <div className="bg-dark height">
      <div className="row bg-dark py-2">
        <div className="col-2 d-flex justify-content-center">
          <NavLink to="/quizecomponent">
            <button
              className="rounded-circle p-2"
              onClick={() => {
                setStart(true);
              }}
            >
              <IoArrowBackCircleOutline />
            </button>
          </NavLink>
        </div>
        <div className="col-9 d-flex text-white justify-content-center align-items-center mr-2">
          {" "}
         {correct}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <img className="banners" src="images/banner.jpg" alt="images" />
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-10 bg-primary rounded text-light p-3">
        {quizData[current].question}
        </div>

        <div className="row gap-2 justify-content-center mt-2">
          <div
            className={`col-5 shoded shadow p-3 text-dark hover:bg-darknp ${
              ans === quizData[current].options[0]
                ? "bg-success p-3"
                : "bg-light"
            }`}
            onClick={() => {
              setAns(quizData[current].options[0]);
            }}
          >
            {quizData[current].options[0]}
          </div>

          <div
            className={`col-5 shoded p-3 shadow text-dark hover:bg-darknp ${
              ans === quizData[current].options[1]
                ? "bg-success p-3"
                : "bg-light"
            }`}
            onClick={() => {
              setAns(quizData[current].options[1]);
            }}
          >
            {quizData[current].options[1]}
          </div>
          <div
            className={`col-5 shoded p-3 shadow text-dark hover:bg-darknp ${
              ans === quizData[current].options[2]
                ? "bg-success p-3"
                : "bg-light"
            }`}
            onClick={() => {
              setAns(quizData[current].options[2]);
            }}
          >
            {quizData[current].options[2]}
          </div>
          <div
            className={`col-5 shoded p-3 shadow text-dark hover:bg-darknp ${
              ans === quizData[current].options[3]
                ? "bg-success p-3"
                : "bg-light"
            }`}
            onClick={() => {
              setAns(quizData[current].options[3]);
            }}
          >
            {quizData[current].options[3]}
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button className="btn btn-primary p-2 m-1" onClick={()=>{saveHandler()}}>
          Save&Next
        </button>
        <button className="btn btn-primary p-2" onClick={()=>{resetQuize()}}>Reset</button>{" "}
        <button className="btn btn-primary w-25 p-2" onClick={()=>{navigate("/result")}}>exit</button>
      </div>
    </div>
  );
};

export default Quize;
