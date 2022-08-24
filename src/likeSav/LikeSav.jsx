import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillHeartFill } from 'react-icons/bs';

const API_KEY = '288618971c313828409260414cbfb257'
const generetedImgURL = 'https://image.tmdb.org/t/p/w500/'

export default function LikeSav() {
  let dispatch = useDispatch()
  let boshMassiv = useSelector(state => state.getItem)
  console.log(boshMassiv);
  
  function delFun(index) {
    dispatch({type:'delFun', payload:index})
    console.log(index)
  }
  
  return (
    <div className="container">
      <h1>hello</h1>
      <h1>hello</h1>
    
      <div className="row">
        {
          (boshMassiv.length > 0) ? boshMassiv.map((item, index) => {
            return (
            
              <div className="col-3">
                <div style={{width:'300px', borderRadius:'12px'}} className="card  mb-4">
                <img style={{width:'300px', borderRadius:'12px'}} src={generetedImgURL + item.poster_path} alt={item.original_title} />
                  <h4 style={{textAlign:'center'}}>{item.original_title}</h4>
                  <BsFillHeartFill style={{marginLeft:'10px',marginBottom:'6px',fontSize:'25px', color:'red'}}  onClick={()=>delFun(index)}/>
                </div>
              </div>
              
            )
          }) : (
            <div className="">
              <h2>Hali savatchaga hech narsa qoshilmadi</h2>
            </div>
          )
        }
      </div>

    </div>
  )
}
