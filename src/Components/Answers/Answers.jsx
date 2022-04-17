import './answers.css'
import React from 'react'

function Answers() {
  return (
    <>
            <div className="main-container ans-container">
            <h1>Result</h1>
            <h2>Yeah !! You have Passed.🎉</h2>
            <h3>Final Score : 80/100</h3>
            {/* 😔  */}
            <div className="quiz-card">
              <div className="quiz-section-1">
                  <h3>Question : 1</h3>
                  <h3>Score : 0</h3>
              </div>
              <div className="quiz-section-2">
                  <div className="question">Which of the below is the biggest reptile in the World?</div>
              </div>
              <div className="quiz-section-3">
                  <div className="option">
                        <label for="option1">
                            <input type="radio" name="radio" id="option1" disabled/>
                            Green anaconda
                        </label>
                        <label for="option2" className="success">
                            <input type="radio" name="radio" id="option2" disabled/>
                            Green anaconda
                        </label>
                        <label for="option3">
                            <input type="radio" name="radio" id="option3" disabled/>
                            Green anaconda
                        </label>
                        <label for="option4" className="error">
                            <input type="radio" name="radio" id="option4" disabled/>
                            Green anaconda
                        </label>
                  </div>
              </div>
          </div>
            <div className="divider"></div>
          <div className="quiz-card">
            <div className="quiz-section-1">
                <h3>Question : 2</h3>
                <h3>Score : 10</h3>
            </div>
            <div className="quiz-section-2">
                <div className="question">Which of the below is the biggest reptile in the World?</div>
            </div>
            <div className="quiz-section-3">
                <div className="option">
                      <label for="option1" className="success">
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
        <div className="divider"></div>
        <div className="quiz-card">
            <div className="quiz-section-1">
                <h3>Question : 3</h3>
                <h3>Score : 0</h3>
            </div>
            <div className="quiz-section-2">
                <div className="question">Which of the below is the biggest reptile in the World?</div>
            </div>
            <div className="quiz-section-3">
                <div className="option">
                      <label for="option1" className="error">
                          <input type="radio" name="radio" id="option1" disabled/>
                          Green anaconda
                      </label>
                      <label for="option2">
                          <input type="radio" name="radio" id="option2" disabled/>
                          Green anaconda
                      </label>
                      <label for="option3" className="success">
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
        <div className="divider"></div>

        </div>
    </>
  )
}

export {Answers}