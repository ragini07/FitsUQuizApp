import React from "react";
import logo from "../../assets/logo.PNG";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/quiz-context";
import { ACTION_TYPE } from "../../Utility/constants";
import { useTheme } from "../../Context/theme-context";

function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { dispatchQuizState } = useData();
  return (
    <nav className="main-navhead">
      <div className="quiz-logo">
        <img src={logo} alt="Brand Logo" />
        <h3
          className="head-title"
          onClick={() => {
            dispatchQuizState({ type: ACTION_TYPE.HOME_DATA });
            navigate("/");
          }}
        >
          KidzWorld
        </h3>
      </div>

      <ul className="right-menu">
        <li onClick={() => toggleTheme()}>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-color"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0Zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </li>
      </ul>
    </nav>
  );
}

export { Header };
