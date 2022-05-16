import React from "react";
import logo from "../../assets/logo.PNG";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <nav className="main-navhead">
      <div className="quiz-logo">
        <img src={logo} alt="Brand Logo" />
        <h3 className="head-title" onClick={() => navigate("/")}>
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
