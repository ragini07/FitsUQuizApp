import './quizQuestions.css'
import React from 'react'

function QuizQuestions() {
  return (
    <>

            <div className="main-container">
         
                
                
        
         <div className="quiz-card">
           
           <div className="top-container">
               <h5>Time Left : <span>30</span> sec</h5>
               <button className="btnn btn-secondary"> <a  href="#" >Quit</a></button>
             
           </div>
             <div className="quiz-section-1">
                 <h3>Question : 1/5</h3>
                 <h3>Score : 0</h3>
             </div>
             <div className="quiz-section-2">
                 <div className="question">Which of the below is the biggest reptile in the World?</div>
             </div>
             <div className="quiz-section-3">
                 <div className="options">
                       <label for="option1">
                           <input type="radio" name="radio" id="option1"/>
                           Green anaconda
                       </label>
                       <label for="option2">
                           <input type="radio" name="radio" id="option2"/>
                           Green anaconda
                       </label>
                       <label for="option3">
                           <input type="radio" name="radio" id="option3"/>
                           Green anaconda
                       </label>
                       <label for="option4">
                           <input type="radio" name="radio" id="option4"/>
                           Green anaconda
                       </label>
                 </div>
             </div>
         <a href="../ResultPage/result.html" className="full-width-cta"><button className="btn full-width-cta">Next <i className="fa fa-arrow-right"></i></button></a>   
       </div>
       </div>
    </>
  )
}

export  {QuizQuestions}