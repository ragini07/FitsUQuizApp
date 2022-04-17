import React from 'react'

function Header() {
  return (
    <nav class="main-navhead">
        <img src="../images/logo.png" alt="Brand Logo"/>
        <h3>FitsU Play</h3>
        <ul class="main-menu">
            <li><a href="#">Home</a></li>
        </ul>
        <ul class="right-menu"> 
            <li><a href="./Auth/login.html">
                <i class="fa fa-user fa-2x"></i>
            </a></li>
        </ul>
    </nav>
  )
}

export { Header}