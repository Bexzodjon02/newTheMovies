import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom";

const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'

export default function Actors() {
  const [allActors, setAllActors] = useState([])
  const [son , setSon] = useState(1)
  
console.log(allActors);
  useEffect(() => {
    getItem()
    function getItem() {
      axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${son}`)
               
      
        .then(ress => {
          // console.log(ress.data.results);
          setAllActors(ress.data.results)
        })
        .catch(err => {
          setAllActors(err.data.results)

        })
    }
  }, [son])
  useEffect(() => {
      axios.get (`https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(resss => {
          console.log(resss);
          // setAllActors(ress.data.results)
        })
        .catch(errr => {
          console.log(errr);
          // setAllActors(err.data.results)
        })
  }, [])
  
  
function Oshir() {
  setSon(son + 1)
}
function kamaysin() {
  if (son === 1) {
    setSon(1)
    return alert("boldi")
  }
  setSon(son - 1)
}

  return (
    <div style={{ marginTop: '90px',background:'#e4e4e1' }}  className=' '>
    <div  className='container '>
      <h2>Popular People</h2>
      <div className="row">
        {
           (allActors.length > 0) ? allActors.map((item, index) => {
            console.log(item.id);
            // console.log(item.known_for[0].release_date);
            return (
                <div key={index} className="col-3">
                <div style={{width:'202px',height:'315px'}} className="card my-2">
                   
                    <Link to={`/idactors/${item.id}`}><img style={{width:'200px',height:'260px',borderRadius:'10px'}}  className='imges2' src={generetedImgURL + item.profile_path} alt="" /></Link>
                   
                      {/* <img style={{width:'200px',height:'260px',borderRadius:'10px'}}  className='imges2' src={generetedImgURL + item.profile_path} alt="" /> */}
                        <h4 style={{ fontSize: "15px", fontWeight: '700' }} className="mt-1 mx-auto">{item.name}</h4>
                        <p className='mx-auto' style={{fontSize:'15px'}} >{item.known_for[0].release_date}</p>
                    </div>
                    </div>
                     
            )
        })
        : (
          <div>Loading...............</div>
        )
        }
      </div>
     <div className="d-flex bg-primary py-2 mb-5" style={{paddingLeft:'37%'}}>
     <button className='btn btn-warning text-xl-start' onClick={kamaysin} >Back Page</button> <h3 style={{width:"40px", height:'40px', background:'#ffc107', textAlign:'center', borderRadius:'50%', fontWeight:'800'}} className='mx-2 text-primary'>{son}</h3> <button  className='btn btn-warning' onClick={Oshir} >New Page</button>
     </div>
    </div>
    </div>
  )
}
