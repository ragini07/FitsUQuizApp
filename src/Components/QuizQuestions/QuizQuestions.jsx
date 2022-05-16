import "./quizQuestions.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/quiz-context";
import { ACTION_TYPE } from "../../Utility/constants";

function QuizQuestions() {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { quizState, dispatchQuizState } = useData();
  const { quiz } = quizState;
  const quizData = quiz.mcqs[questionNo];

  

  const nextClickHandler = () => {
    dispatchQuizState({
      type: ACTION_TYPE.NEXT_QUESTION,
      payload: {
        question: quizData.question,
        optionSelected: selectedOption,
        answer: quizData.answer,
      },
    });
    setSelectedOption("");
    if (quiz.mcqs.length - 1 > questionNo) setQuestionNo((prev) => prev + 1);

    if (quiz.mcqs.length - 1 === questionNo) navigate("/answers");
    else setTimer(30);
  };
  const quitHandler = () => {
 
  };

  return (
    <>
      <div className="main-container">
        <div className="quiz-card">
          <div className="top-container">
            <h5>
              Time Left : <span>{timer}</span> sec
            </h5>
            <button className="btnn btn-secondary" onClick={quitHandler}>
              Quit
            </button>
          </div>
          <div className="quiz-section-1">
            <h3>
              Question : {questionNo + 1}/{quiz.mcqs.length}
            </h3>
          </div>
          <div className="quiz-section-2">
            <div className="question">{quizData.question}</div>
          </div>
          <div className="quiz-section-3">
            <div className="options">
              {quizData.options.map((option) => {
                return (
                  <label key={option} onClick={() => setSelectedOption(option)}>
                    <input type="radio" name="radio" id={option} />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
          {
            <button className="btn full-width-cta" onClick={nextClickHandler}>
              {quiz.mcqs.length - 1 === questionNo ? "Submit" : "Next"}{" "}
              <i className="fa fa-arrow-right"></i>
            </button>
          }
        </div>
      </div>
    </>
  );
}

export { QuizQuestions };
