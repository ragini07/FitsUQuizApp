import "./answer.css";
import { useState, useEffect } from "react";
import { useData } from "../../Context/quiz-context";
import { ACTION_TYPE } from "../../Utility/constants";
import { useNavigate } from "react-router-dom";

function Answers() {
  const [score, setScore] = useState("");
  const { quizState, dispatchQuizState } = useData();
  const navigate = useNavigate();
  const { quiz, selectedQuestions } = quizState;

  useEffect(() => {
    const totalScore = selectedQuestions.reduce((acc, curr) => {
      if (curr.optionSelected === curr.answer) acc += 10;
      return acc;
    }, 0);
    setScore(totalScore);
  }, []);

  return (
    <>
      <div className="center-btn">
        <button
          className="btnn btn-secondary center"
          onClick={() => {
            navigate("/");
            dispatchQuizState({ type: ACTION_TYPE.HOME_DATA });
          }}
        >
          <i className="fa fa-arrow-left"></i> Back To Home
        </button>
      </div>

      <div className="main-container ans-container">
        <h1>Result</h1>
        {(score / quiz.mcqs.length) * 10 * 100 >= 60 ? (
          <h2>Yeah !! You have Passed.🎉</h2>
        ) : (
          <h2>Oops !! Better luck next time.😔</h2>
        )}

        <h3>
          Final Score : {score}/{quiz.mcqs.length * 10}
        </h3>

        {quiz.mcqs.map(({ _id, question, options, answer }, index) => {
          return (
            <>
              <div className="quiz-card" key={_id}>
                <div className="quiz-section-1">
                  <h3>Question : {index + 1}</h3>
                </div>
                <div className="quiz-section-2">
                  <div className="question">{question}</div>
                </div>
                <div className="quiz-section-3">
                  <div className="option">
                    {options.map((option) => {
                      return (
                        <label
                          key={option}
                          className={
                            option === answer
                              ? "success"
                              : option ===
                                selectedQuestions[index].optionSelected
                              ? "error"
                              : ""
                          }
                        >
                          <input
                            type="radio"
                            name="radio"
                            id={option}
                            disabled
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </>
          );
        })}

       
          
               
      </div>
    </>
  );
}

export { Answers };
