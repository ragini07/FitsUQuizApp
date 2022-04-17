import React from 'react'
import logo from '../../assets/logo.PNG'

function Header() {
  return (
    <nav className="main-navhead">
        <div className="quiz-logo">
        <img src={logo} alt="Brand Logo"/>
        <h3 className="head-title">KidzWorld</h3>
        </div>
     
        {/* <ul className="main-menu">
            <li><a href="#">Home</a></li>
        </ul> */}
        <ul className="right-menu"> 
            <li>
                <i className="fa fa-user fa-2x"></i>
           </li>
        </ul>
    </nav>
  )
}

export { Header}