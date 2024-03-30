const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isUser: true,
        isLoading: true,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isUser: false,
        isLoading: false,
      };
    case "GET_SUBJECT":
      return {
        ...state,
        isUser: true,
        isLoading: true,
        subjects: action.payload,
      };

    case "SET_TOPIC":
      return {
        ...state,
        isUser: true,
        isLoading: true,
        topic: action.payload,
      };
    case "SET_SUB_TOPIC":
      return {
        ...state,
        isUser: true,
        isLoading: true,
        subtopic: action.payload,
      };

    case "SET_QUIZE_DATA":
      const { subtopic,defaultchepter } = state;
      const defaultquize_pdf_video = defaultchepter.filter(
        (item) => item.id === action.payload
      );

      console.log("Filtered subtopic :", subtopic )
      const quize_pdf_video = subtopic.filter(
        (item) => item.id === action.payload
      );
      console.log("Filtered data:", quize_pdf_video); // Log filtered data

      if (quize_pdf_video.length === 0) {
        console.log("No data found for the provided ID."); // Log if no data is found
      }

      return {
        ...state,
        isUser: true,
        isLoading: true, // Check if you need to set isLoading to true here
        quizedata: quize_pdf_video,
        defquizedata:defaultquize_pdf_video
      };


      

    case "SET_TOPIC_FILTER_DATA":
      const { topic } = state;

      const data = topic.filter((item) => {
        return item.id === action.payload;
      });
      console.log(data, "data");

      return {
        ...state,
        chapter: data,
      };

    case "CLEAR_SUBTOPIC":
      return {
        ...state,
        subtopic: [],
      };

    case "SET_DEFAULT_CHEPTER":
      return {
        ...state,
        isUser: true,
        isLoading: true,
        defaultchepter: action.payload,
      };

    case "SET_TOPIC_PROFILE_DATA":
      return {
        ...state,
        isUser: true,
        isLoading: true,
        profileData: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
