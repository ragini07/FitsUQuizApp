import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {Header , Footer ,Home ,CategoryQuiz,QuizQuestions,Answers,Rules } from './Components'

function App() {
  return (
    <div>
   <Header />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryQuiz />} />
        <Route path="/quiz/:id" element={<QuizQuestions />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/rules" element={<Rules />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/testApi" element={<Mockman />} />
    </Routes>
      
    </div>
  );
}

export default App;
