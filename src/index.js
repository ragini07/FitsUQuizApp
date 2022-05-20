import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {QuizProvider} from './Context/quiz-context'
import {ThemeProvider} from './Context/theme-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <QuizProvider>
     <Router>
     <App />
     </Router>
     </QuizProvider>
     </ThemeProvider>
  
  </React.StrictMode>,
  document.getElementById("root")
);
