import './rules.css'

import React from 'react'


function Rules() {
  return (
    <div class="main-container">
    <div class="rule-container">
        <h2>Rules</h2>
        <ul class="stacked">
            <li class="list"><i class="fa fa-star filled-star"></i>There is only correct option for each question</li>
            <li class="list"><i class="fa fa-star filled-star"></i>Each right answer will score 10 points</li>
            <li class="list"><i class="fa fa-star filled-star"></i>Pass Percentage - 70%</li>
       </ul>
       <button class="btn"><a href="../QuestionPage/question.html">Start Quiz</a></button>
    </div>

</div>
  )
}

export {Rules}