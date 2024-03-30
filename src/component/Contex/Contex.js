import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import Reducer from "../Reducer/AuthReducer";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [topicbanner, setTopicBanner] = useState(true);

  const [start ,setStart]=useState(true)
  const [exit ,setExit]=useState(true)
  const [correct,setCorrect]=useState(0)
  const [current,setCurrent]=useState(0);

  
  
  
  const intialstate = {
    isUser: false,
    isLoading: false,
    subjects: [],
    topic: [],
    subtopic: [],
    quizedata: [],
    defquizedata:[],
    chapter: [],
    defaultchepter: [],
    profileData: [],
  };

  const [state, dispatch] = useReducer(Reducer, intialstate);

  const Register = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://instimattress.thethreewings.com/api/signup",
        { data }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginFun = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://instimattress.thethreewings.com/api/login",
        data
      );
      const res = await response.data.data;
      console.log(res, "responce");
      console.log(res.token, "token");
      const token = res.token;
      localStorage.setItem("token", token);
      dispatch({ type: "LOGIN" });
    } catch (error) {
      console.log(error);
    }
  };

  const LogoutFun = () => {
    dispatch({ type: "LOGOUT" });
  };

  const SubjectFun = async () => {
    try {
      dispatch({ type: "SET_DEFAULT_CHEPTER", payload: [] });
      const data = await axios.get(
        "http://instimattress.thethreewings.com/api/get_subject"
      );
      console.log(data.data.Subjects);
      const subject = data.data.Subjects;
      console.log(subject, "sub");
      dispatch({ type: "GET_SUBJECT", payload: subject });
    } catch (error) {
      console.log(error);
    }
  };

  const GetTopic = async (url) => {
    try {
      const token = localStorage.getItem("token");
     
      await dispatch({ type: "CLEAR_SUBTOPIC" });
      dispatch({ type: "SET_TOPIC_FILTER_DATA", payload: [] });
      await dispatch({ type: "SET_TOPIC", payload: [] });

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data && res.data.Topics) {
        console.log(res.data.Topics);

        const Topic = await res.data.Topics;

        await dispatch({ type: "SET_TOPIC", payload: Topic });
        console.log(Topic, " set topic data ");
      } else {
        console.log("Topics not found in response data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SubTopicFun = async (url) => {
  
    try {
      const token = localStorage.getItem("token");
      await dispatch({ type: "SET_DEFAULT_CHEPTER", payload: [] });
   
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data) {
        const subTopic = await res.data.subtopics;

        await dispatch({ type: "SET_SUB_TOPIC", payload: subTopic });
        console.log(subTopic, " set subtopic datas ");
      } else {
        console.log("Topics not found in response data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DefaultChepter = async (url) => {
    try {
      const token = localStorage.getItem("token");
    
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data, "data milgaya");
      if (res.data) {
        const subTopic = await res.data.subtopics;

        dispatch({ type: "SET_DEFAULT_CHEPTER", payload: subTopic });
      } else {
        console.log("Topics not found in response data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const QuizeFun = async (id) => {
    await dispatch({ type: "SET_TOPIC_FILTER_DATA", payload: [] });
    dispatch({ type: "SET_QUIZE_DATA", payload: id });
    
   

  };

  const TopicFilter = async (id) => {
    console.log(id, "topic chepter id");
   
    dispatch({ type: "SET_TOPIC_FILTER_DATA", payload: id });
  };

  

 

  const ProfileDataFun = async (url) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data) {
        const Profile = await res.data;

        dispatch({ type: "SET_TOPIC_PROFILE_DATA", payload: Profile });
        console.log(Profile, " set  Profile data ");
      } else {
        console.log(" Profile not found in response data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      dispatch({ type: "LOGIN" });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        Register,
        LoginFun,
        LogoutFun,
        SubjectFun,
        GetTopic,
        TopicFilter,
        SubTopicFun,
        setTopicBanner,
        QuizeFun,
        DefaultChepter,
        ProfileDataFun,
        start,
        exit,
        setStart,
        setExit,
        current,setCurrent,
       
        correct,setCorrect,
     
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
