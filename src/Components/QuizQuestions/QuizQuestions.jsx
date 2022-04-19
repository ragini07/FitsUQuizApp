import './quizQuestions.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useData} from '../../Context/quiz-context'

function QuizQuestions() {
    const [questionNo , setQuestionNo] = useState(0);
    const navigate = useNavigate()
    const { quizState, dispatchQuizState } = useData()
    const {quiz} = quizState
    const quizData = quiz.mcqs[questionNo]
    console.log("quiz",quiz)
    console.log(quiz.mcqs[questionNo])
  
  return (
    <>

            <div className="main-container">

         <div className="quiz-card">
           
           <div className="top-container">
               <h5>Time Left : <span>30</span> sec</h5>
               <button className="btnn btn-secondary"> <a  href="#" >Quit</a></button>
             
           </div>
             <div className="quiz-section-1">
                 <h3>Question : {questionNo+1}/5</h3>
                 <h3>Score : 0</h3>
             </div>
             <div className="quiz-section-2">
                 <div className="question">{quizData.question}</div>
             </div>
             <div className="quiz-section-3">
                 <div className="options">
                     {
                         quizData.options.map(option => {
                             return (
                                <label>
                                <input type="radio" name="radio" id={option}/>
                                <span>{option}</span>
                               
                            </label>
                             )
                         })
                     }
            
                 </div>
             </div>
             {
                 quiz.mcqs.length-1 === questionNo ? 
                 <button className="btn full-width-cta"
                 onClick={() => navigate('/answers')}>Submit <i className="fa fa-arrow-right"></i></button>:
                 <button className="btn full-width-cta"
                 onClick={() => setQuestionNo(prev => prev+1)}>Next <i className="fa fa-arrow-right"></i></button>
             }
        
       </div>
       </div>
    </>
  )
}

export  {QuizQuestions}