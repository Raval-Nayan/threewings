import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import { useEffect, useState } from "react";
import Splach from "./component/splach/splach";
import Signup from "./component/signup/Signup";
import Menu from "./component/menu/Menu";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home/Home";
import Logout from "./component/logout/Logout";
import Quize from "./component/Quize/Quize";

import Chepternav from "./component/chepter_navbar/Chepternav";

import Quizecomponent from "./component/QuizComponent/Quizecomponent";
import Profile from "./component/Profile/Profile";
import MyCalendar from "./component/Calender/Calender";
import Cource from "./component/Cource/cource";
import { useGlobalContext } from "./component/Contex/Contex";
import CheptarComponent from "./component/cheptercomponent/CheptarComponent";
import ErrorPage from "./component/ErrorPage";
import Result from "./component/Quize/Result";

function App() {
  const [loding, setLoding] = useState(false);

  const { isUser, isLoading } = useGlobalContext();

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 2000);
  }, []);

  return (
    <div className="container-fluid">
      {loding ? (
        <Splach />
      ) : (
        <BrowserRouter>
          <Routes>
            {!isUser ? (
              <>
                <Route exact path="/" element={<Login />} />

                <Route path="/signup" element={<Signup />} />
              </>
            ) : (
              <Route path="*" element={<ErrorPage  path2="/home" text2="Go Home" />}></Route>
            )}

            {isUser ? (
              <>
                <Route
                  path="/home"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Navbar className="nav" title={"VHM ACADEMY FOR BLENDED LEARNING"} />
                        <Home />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/course"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Navbar title={"Course"} />
                        <Cource />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/favourite"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Navbar title={"Favourite"} />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Navbar title={"Profile"} />
                        <Profile />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/calender"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Navbar title={"Calender"} />
                        <MyCalendar />
                      </div>
                    </div>
                  }
                />

                <Route path="/quize" element={<Quize />}></Route>
                <Route path="/result" element={<Result/>}></Route>
              

                <Route
                  path="/logoff"
                  element={
                    <div className=" home_container d-flex">
                      <div className="menu_con">
                        <Menu />
                      </div>

                      <div className="appmainpage">
                        <Logout />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/chepter/:id"
                  element={
                    <>
                      <div className="">
                        <Chepternav Link={"home"}></Chepternav>

                        <div className="">
                          <CheptarComponent />
                        </div>
                      </div>
                    </>
                  }
                />

                <Route
                  path="/quizecomponent"
                  element={
                    <>
                      <div>
                        <Chepternav Link={"chepter"} />
                        <Quizecomponent />
                      </div>
                    </>
                  }
                />
              </>
            ): ( 
              
              <Route path="*"  element={<ErrorPage pathData1="/" textData1="Go Login" />} />
             )}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
