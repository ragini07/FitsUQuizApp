import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
   <>
            <header className="promo-section">
             <div className="promo-text-container">
                <h1>Take a Quiz and enjoy with fun.</h1>
                <button className="btn">Explore Quiz<i className="fa fa-chevron-right"></i></button>
             </div>
            <img src="https://cf.quizizz.com/img/mkt/1-HERO-Digital_Collage.png" alt="promo image" className="res-img promo-img"/>
        </header>
        <div className="main-container" id="categoryi">
            <h1 className="title-big">Category</h1>
            <div className="category-container">
                <div className="card-with-overlay">
                    <img className="res-img" src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div className="card-title text-overlap">
                         <div className="title bg-light">Earth</div>
                    </div>
                    <a href="./Category/category.html"> <button className="btn">Explore</button></a>
                   
                </div> 

                <div className="card-with-overlay">
                    <img className="res-img" src="https://media.istockphoto.com/photos/two-rothschilds-giraffes-in-northern-uganda-picture-id1307291479?b=1&k=20&m=1307291479&s=170667a&w=0&h=SWKMKkWhu1CS7l55vWgMPZYanqjdwAia6puS8YSCpEo=" alt="" />
                    <div className="card-title text-overlap">
                         <div className="title bg-light">WildLife</div>
                    </div>
                    <a href="./Category/category.html"> <button className="btn">Explore</button></a>
                   {/* <button className="btn"><a href="./Category/category.html">Explore</i></a></button> */}
                </div> 
            </div>

        </div>
   </>
  )
}

export {Home}