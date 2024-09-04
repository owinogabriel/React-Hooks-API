import React from 'react'
import bgImage from './assets/bg.jpg';

export default function Home() {
  return (
    <div className="Hero">
      <div class="card bg-dark text-white border-0">
      <img src={bgImage} class="card-img" alt="Background" height="550px"/>
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">

        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
        <p class="card-text fs-2">CHECK OUT ALL THE TRENDS.</p>
        </div>
   </div></div>
   </div>
  )
}
