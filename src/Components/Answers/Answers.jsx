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


  return (
    <>
         <div class="main-container">
            <h1>Result</h1>
            <h2>Yeah !! You have Passed.🎉</h2>
            <h3>Final Score : 80/100</h3>
            <!-- 😔 -->
            <div class="quiz-card">
              <div class="quiz-section-1">
                  <h3>Question : 1</h3>
                  <h3>Score : 0</h3>
              </div>
              <div class="quiz-section-2">
                  <div class="question">Which of the below is the biggest reptile in the World?</div>
              </div>
              <div class="quiz-section-3">
                  <div class="option">
                        <label for="option1">
                            <input type="radio" name="radio" id="option1" disabled/>
                            Green anaconda
                        </label>
                        <label for="option2" class="success">
                            <input type="radio" name="radio" id="option2" disabled/>
                            Green anaconda
                        </label>
                        <label for="option3">
                            <input type="radio" name="radio" id="option3" disabled/>
                            Green anaconda
                        </label>
                        <label for="option4" class="error">
                            <input type="radio" name="radio" id="option4" disabled/>
                            Green anaconda
                        </label>
                  </div>
              </div>
          </div>
            <div class="divider"></div>
          <div class="quiz-card">
            <div class="quiz-section-1">
                <h3>Question : 2</h3>
                <h3>Score : 10</h3>
            </div>
            <div class="quiz-section-2">
                <div class="question">Which of the below is the biggest reptile in the World?</div>
            </div>
            <div class="quiz-section-3">
                <div class="option">
                      <label for="option1" class="success">
                          <input type="radio" name="radio" id="option1" disabled/>
                          Green anaconda
                      </label>
                      <label for="option2">
                          <input type="radio" name="radio" id="option2" disabled/>
                          Green anaconda
                      </label>
                      <label for="option3">
                          <input type="radio" name="radio" id="option3" disabled/>
                          Green anaconda
                      </label>
                      <label for="option4">
                          <input type="radio" name="radio" id="option4" disabled/>
                          Green anaconda
                      </label>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="quiz-card">
            <div class="quiz-section-1">
                <h3>Question : 3</h3>
                <h3>Score : 0</h3>
            </div>
            <div class="quiz-section-2">
                <div class="question">Which of the below is the biggest reptile in the World?</div>
            </div>
            <div class="quiz-section-3">
                <div class="option">
                      <label for="option1" class="error">
                          <input type="radio" name="radio" id="option1" disabled/>
                          Green anaconda
                      </label>
                      <label for="option2">
                          <input type="radio" name="radio" id="option2" disabled/>
                          Green anaconda
                      </label>
                      <label for="option3" class="success">
                          <input type="radio" name="radio" id="option3" disabled/>
                          Green anaconda
                      </label>
                      <label for="option4">
                          <input type="radio" name="radio" id="option4" disabled/>
                          Green anaconda
                      </label>
                </div>
            </div>
        </div>
        <div class="divider"></div>

        </div>

    </>
  );
}

export { Answers };
