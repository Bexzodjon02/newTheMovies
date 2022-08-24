import React from 'react'
import './Footer.css'
import rasm1 from './img2.svg'

export default function Footer() {
  return (
    <div className='footer1'>
      <nav>
          <div className="join">
          <img src= {rasm1} />
          <button className='footerBtn'>Behzodbek_02</button>
        </div>
        <div className="div">
        <div>
          <h3>THE BASICS</h3>
          <ul>
            <li><a href="#">About TMDB</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Forums</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">System Status</a></li>
          </ul>
        </div>

        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li><a href="#">Contribution Bible</a></li>
            <li><a href="#">Add New Movie</a></li>
            <li><a href="#">Add New Movie</a></li>
            <li><a href="#">Add New TV Show</a></li>
          </ul>
        </div>

        <div>
          <h3>COMMUNITY</h3>
          <ul>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">API Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        </div>
        

      
      </nav>
    </div>
  )
}
