import { createContext, useContext, useReducer, useState } from "react";
import { quizReducerFtn } from "../Reducer/quizReducer";
import { initialState } from "../Utility/constants";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [quizState, dispatchQuizState] = useReducer(
    quizReducerFtn,
    initialState
  );
  return (
    <QuizContext.Provider
      value={{
        quizState,
        dispatchQuizState,
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useData = () => {
  return useContext(QuizContext);
};

export { useData, QuizProvider };
