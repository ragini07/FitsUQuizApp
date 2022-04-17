import React from 'react'

function Home() {
  return (
   <>
            <header class="promo-section">
             <div class="promo-text-container">
                <h1>Take a Quiz and enjoy with fun.</h1>
                <button class="btn"><a href="#category">Explore Quiz<i class="fas fa-chevron-right"></i></a></button>
             </div>
            <img src="https://cf.quizizz.com/img/mkt/1-HERO-Digital_Collage.png" alt="" class="res-img promo-img"/>
        </header>
        <div class="main-container" id="category">
            <h1 class="title-big">Category</h1>
            <div class="category-container">
                <div class="card-with-overlay">
                    <img class="res-img" src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                    <div class="card-title text-overlap">
                         <div class="title bg-light">Earth</div>
                    </div>
                    <a href="./Category/category.html"> <button class="btn">Explore</button></a>
                   
                </div> 

                <div class="card-with-overlay">
                    <img class="res-img" src="https://media.istockphoto.com/photos/two-rothschilds-giraffes-in-northern-uganda-picture-id1307291479?b=1&k=20&m=1307291479&s=170667a&w=0&h=SWKMKkWhu1CS7l55vWgMPZYanqjdwAia6puS8YSCpEo=" alt="" />
                    <div class="card-title text-overlap">
                         <div class="title bg-light">WildLife</div>
                    </div>
                    <a href="./Category/category.html"> <button class="btn">Explore</button></a>
                   {/* <button class="btn"><a href="./Category/category.html">Explore</i></a></button> */}
                </div> 
            </div>

        </div>
   </>
  )
}

export {Home}