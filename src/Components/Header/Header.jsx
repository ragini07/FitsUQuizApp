import React from "react";
import logo from "../../assets/logo.PNG";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/quiz-context";
import { ACTION_TYPE } from "../../Utility/constants";

function Header() {
  const navigate = useNavigate();
  const { dispatchQuizState } = useData();
  return (
    <nav className="main-navhead">
      <div className="quiz-logo">
        <img src={logo} alt="Brand Logo" />
        <h3 className="head-title" onClick={() => {
            dispatchQuizState({ type: ACTION_TYPE.HOME_DATA });
            navigate("/")
        }}>
          KidzWorld
        </h3>
      </div>

      {/* <ul className="right-menu"> 
            <li>
                <i className="fa fa-user fa-2x"></i>
           </li>
        </ul> */}
    </nav>
  );
}

export { Header };
