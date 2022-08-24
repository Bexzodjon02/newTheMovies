import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import  Corusel  from './Corusel.jsx'
import staticLogo from "./Снимок экрана 2022-08-19 175121.png";
import Footer from "../Footer/Footer.js";


export default function () {
  const [search, setSearch]= useState('')
  
  return (
    <div>
      <section  className='container '>
        <div className='BackImage' >
          <div className='NavbarBack'>
            <h2 className='welcome'>Welcome.</h2>
            <h3 className='WelTExt'>Millions of movies, TV shows and people to discover. Explore now.</h3>
            <div className='btnlar'>
              <input onChange={(val)=>setSearch(val.target.value)} className='NavSearch' type='text' placeholder='Search for amovie , tv show, person' />
              <Link to={`/search/:${search}`} state={{soz:search}} className='navBtn'  >Search</Link> 
            </div>
          </div>

        </div>
      <Corusel/>
      </section>
      <div className="">
        <img style={{width:'1460px', marginLeft:'70px', marginTop:'50px', marginBottom:'50px'}} src={staticLogo} alt="" />
      </div>
      
      <div className="footer">
          <Footer/>
      </div>
    </div>
  )

}