import React,{useState, useEffect} from 'react'
import axios from 'axios'
const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'

export default function Progress() {
    const [moviAll2, setMoviAll2] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
        .then(res => {
            // console.log(res.data.results);
            setMoviAll2(res.data.results)
        })
    }, [])
    
    return (
        <div>
            {
                (moviAll2.length > 0) && moviAll2.map((item, index) => {
                    return (
                        <div className='progres2'>
                            <div className='circle2'>
                                <p className='textNav' style={{ fontWeight: "600" }}  >{item.vote_average * 10}<span style={{ fontSize: '10px' }}>%</span></p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}