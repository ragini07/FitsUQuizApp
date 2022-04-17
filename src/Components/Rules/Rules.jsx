import './rules.css'

import React from 'react'


function Rules() {
  return (
    <div className="main-container">
    <div className="rule-container">
        <h2>Rules</h2>
        <ul className="stacked">
            <li className="list"><i className="fa fa-star filled-star"></i>There is only correct option for each question</li>
            <li className="list"><i className="fa fa-star filled-star"></i>Each right answer will score 10 points</li>
            <li className="list"><i className="fa fa-star filled-star"></i>Pass Percentage - 70%</li>
       </ul>
       <button className="btn"><a href="../QuestionPage/question.html">Start Quiz</a></button>
    </div>

</div>
  )
}

export {Rules}