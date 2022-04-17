import React from 'react'

function CategoryQuiz() {
  return (
    <div class="main-container" id="category">
    <h1 class="title-big">WildLife</h1>
    <div class="category-container">
        <div class="card-with-overlay">
            <img class="res-img" src="https://images.unsplash.com/photo-1545286796-2ec7f880a911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVwdGlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            <div class="card-title text-overlap">
                 <div class="title bg-light">Reptiles</div>
            </div>
            <div class="card-desc">
                <p><i class="fa fa-tag"></i>Take this quiz to test yourself</p>
                <p><i class="fa fa-tag"></i>5 Questions</p>
            </div> 
            <button class="btn"><a href="../Rules/rules.html">Play Now</a></button>
        </div> 

        <div class="card-with-overlay">
            <img class="res-img" src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            <div class="card-title text-overlap">
                 <div class="title bg-light">Birds</div>
            </div>
            <div class="card-desc">
                <p><i class="fa fa-tag"></i>Take this quiz to test yourself</p>
                <p><i class="fa fa-tag"></i>5 Questions</p>
                
            </div> 
            <button class="btn"><a href="../Rules/rules.html">Play Now</a></button>
        </div> 
    </div>

</div>
  )
}

export {CategoryQuiz}