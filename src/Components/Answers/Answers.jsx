import "./answers.css";
import { useState, useEffect } from "react";
import { useData } from "../../Context/quiz-context";
import { ACTION_TYPE } from "../../Utility/constants";
import { useNavigate } from "react-router-dom";

function Answers() {
  const [score, setScore] = useState("");
  const { quizState, dispatchQuizState } = useData();
  const navigate = useNavigate();
  const { quiz, selectedQuestions } = quizState;


  return (
    <>
  <div>answer page</div>
    </>
  );
}

export { Answers };
