import Mockman from "mockman-js";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./Context/theme-context";
import {
  Header,
  Footer,
  NotFound,
  Home,
  CategoryQuiz,
  QuizQuestions,
  Answers,
  Rules,
} from "./Components";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryQuiz />} />
        <Route path="/quiz/:id" element={<QuizQuestions />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
