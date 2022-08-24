import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsTextIndentLeft, BsFillHeartFill, BsFillBookmarkStarFill, BsFillStarFill } from 'react-icons/bs';
import './idDetails.css'
const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'


export default function IdDetails() {
  const params = useParams()
  console.log(params);
  const [dataMovi, setDataMovi] = useState(null)
  const [chiq, setChiq] = useState(false)

  useEffect(() => {
    getData()
    async function getData() {
      let result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`)
        .then(ress => {
          return ress.json()
        })
        .catch(err => {
          return err.json()
        })
      console.log(result);
      setDataMovi(result)
    }
  }, [])

  return (
    <div style={{ marginTop: '100px', width: '100%', marginBottom: '100px', height: '900px' }} className='container'>
      {
        (dataMovi) ? (

          <div className="row mt-5  ">
              <img style={{width:'1300px',height:'700px'}} src={generetedImgURL + dataMovi.backdrop_path} className="" alt="..." >
              </img>
              
              <div className="card-img-overlay ">
                
              <div className="card-img-overlay ">   
              
                <div className="row">
                  <div className="col-4">
                    <div className=" det_left">
                      <img style={{ width: '300px', marginTop: '150px', borderRadius: '18px', marginLeft: '150px' }} src={generetedImgURL + dataMovi.poster_path} alt="" />
                    </div>

                  </div>
                  <div className="col-8">
                    <h2 style={{ marginTop: '100px' }} className='text-light'>{dataMovi.title} <span>({dataMovi.release_date})</span></h2>
                    <div className='IDCard'>
                      <div style={{}} className='IDcircle'>
                        <div className='IDprogress'>
                          <p onClick={() => { setChiq(!chiq) }} className='IDfoiz' style={{ color: 'white' }} >{parseInt(dataMovi.vote_average * 10)}<span>%</span></p>
                        </div>
                      </div>
                      <div className='icons'>
                        <ul className='icons2'>
                          <li><BsTextIndentLeft className='ico ' style={{cursor:'pointer'}}/></li>
                          <li><BsFillHeartFill className='ico ' style={{cursor:'pointer'}}/></li>
                          <li><BsFillBookmarkStarFill className='ico ' style={{cursor:'pointer'}}/></li>
                          <li><BsFillStarFill className='ico ' style={{cursor:'pointer'}}/></li>
                        </ul>
                      </div>
                      {
                        (chiq) ?
                          <div className='idCard'>
                            <div className='container '>
                              <h3>Tagline:{dataMovi.tagline}</h3>
                              <p>Date:{dataMovi.release_date}</p>
                              <h3>Budjet:{dataMovi.budget} <sup><del>dollors</del></sup></h3>
                              <h3>Vota_average: {parseInt(dataMovi.vote_average * 10)} <span>%</span></h3>
                              <h5>Production Countries:United States of America</h5>
                              <h3>Vote_count:{dataMovi.vote_count}</h3>
                              <p>Date:{dataMovi.overview}</p>
                            </div>
                          </div>
                          :
                          <div>
                          </div>
                      }
                    </div>
                    <p className='text-light mt-5'>{dataMovi.overview}</p>

                  </div>
                </div>
              </div>
              </div>
          
          </div>
        ) : (
          <h2>Loading.........</h2>
        )
      }
    
    </div>
  )
}