import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import SaveBtn from '../../SaveBtn/SaveBtn'

const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'

export default function UpComing() {
    const [moviAll, setMoviAll] = useState([])
    useEffect(() => {
      getDate()
      async function getDate() {
        let result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`)
          .then(ress => {
            return ress.json()
          })
          .catch(err => {
            return err.json()
          })
        setMoviAll(result.results)
        console.log(result);
      }
    }, [])
    
  return (
    <div>
         <div className='container'>
        <h1>Hwloo</h1>
    <div className='row mt-5'>
    <div className='col-3  pt-4'>
       <select className='form-control shadow' style={{fontSize:'25px',fontWeight:'700'}}>
        <option value="" >Sport</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
       </select>
        <div className='card shadow my-3'>
        <select className='form-control' style={{fontSize:'25px',fontWeight:'700'}}>
        <option value="" >Fillters</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
       </select>
        </div>
        <div className='card shadow mb-3'>
            <select className='form-control' style={{fontSize:'25px',fontWeight:'700'}}>
        <option value="" >Where To Watch</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
        <option value="" >salom1</option>
       </select>
        </div>
        <div className=' mb-3'>
            <button className='categorbtn' style={{width:'250px', height:'45px',border:'none', borderRadius:'50px',fontSize:'20px',fontWeight:'600'}}>Search</button>
        </div>
      </div>
      <div className='col-9'>


        <Link to={'/'}>back</Link> MoviPage1
        <div className='row'>
          {
            
            (moviAll.length > 0) ? moviAll.map((item, index) => {
                return (
                    <div key={index} className="col-3">
                        <div style={{marginTop:'-30px',marginTop:'10px', height:"340px", width:'200px'}}  className=' navbarCard '>
                           
                           <div className='progres2' style={{
                            width: "50px",
                            height: '50px',
                            borderRadius:' 50%',
                            background:'#032541',
                            position:' absolute',
                            display: 'flex',
                            alignItems:' center',
                            justifyContent: 'center',
                            marginTop: '230px',
                            marginLeft: '15px'}}>
                                
                            <div className='circle2' style={
                               { width: '44px',
                            height:' 44px',
                            background: 'greenyellow',
                            borderRadius:' 50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}>
                            <p className='textNav' style={{ 
                                fontWeight: "600" ,
                                background:' #032541',
                                color: '#fff',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent:' center',
                                alignItems: 'center',
                                marginTop: '16px',
                                marginLeft: '0.5px',
                            
                            }}  >{item.vote_average * 10}<span style={{ fontSize: '10px' }}>%</span></p>
                            </div>
                        </div>
                        
                        <SaveBtn massiv={item}/>
                            <Link to={`/details/${item.id}`}><img style={{width:'200px',height:'260px',borderRadius:'10px'}}  className='imges2' src={generetedImgURL + item.poster_path} alt="" /></Link>
                            <h4 style={{ fontSize: "15px", fontWeight: '700' }} className="mt-4">{item.title}</h4>
                            <p >{item.release_date}</p>
                        </div>
                    </div>
                )
            })
            :
            (
              <div>Loading...............</div>
            )
          }
        </div>
      </div>
    </div>


  </div>
        
    </div>
  )
}
