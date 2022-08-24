import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import  "./navbar.css";
import NavSavBtn from '../SaveBtn/NavSavBtn';
// import SaveCard from "../companents/SaveCard.jsx";
// import Progress from './Progress.jsx';
const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'


export default function Corusel() {
    const [moviAll2, setMoviAll2] = useState([])
    
    const [moviAll, setMoviAll] = useState([])
    const [Mas , setMas] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=6`)
        .then(res => {
            console.log(res.data.results);
            setMoviAll2(res.data.results)
        })
    }, [])
    
    
    function toggle1() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`)
            .then(res => {
                setMoviAll(res.data.results)
                setMas(res.data.results)
            })
    }
    function toggle2() {
        setMas([])
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=7`)
            .then(res => {
                setMoviAll(res.data.results)
                
            })
            console.log("IAHLdi");
    }
    
  return (
    <div>
        {/* ========================================================== */}
        <div className='btnCategor d-flex mt-3'>
                <h2>What's Popular</h2>
                <div className='toggle '>
                    <p onClick={toggle1} className={`mytoggle ${(Mas.length>0) && "toggle1"}`}>On TV</p>
                    <p onClick={toggle2} className={`mytoggle1 ${(Mas.length===0) && "toggle2"}`} >In Theaters</p>
                </div>
            </div>
        
            <div className='corusel2 d-flex carousel_top'>
                {
                    (moviAll.length > 0) && moviAll.map((item, index) => {
                        return (
                            <div key={index} className="">
                                <div  className=' navbarCard mx-2 '>
                                <NavSavBtn massiv={item}/>
                                <Link  to={`/details/${item.id}`}><img className='imges' src={generetedImgURL + item.poster_path} alt="" /></Link>
                                    <h4 style={{ fontSize: "15px", fontWeight: '700' }} className="mt-4">{item.title}</h4>
                                    <p >{item.release_date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
        {/* ========================================================== */}
        
        <div className='corusel2 d-flex carousel_top'>
                {
                    (moviAll2.length > 0) && moviAll2.map((item, index) => {
                        return (
                            <div key={index} className="">
                                <div  className=' navbarCard mx-3 '>
                                <NavSavBtn massiv={item}/>
                                    <Link  to={`/details/${item.id}`}><img className='imges' src={generetedImgURL + item.poster_path} alt=""/></Link>
                                    <h4 style={{ fontSize: "15px", fontWeight: '700' }} className="mt-4">{item.title}</h4>
                                    <p >{item.release_date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
    </div>
  )
}
