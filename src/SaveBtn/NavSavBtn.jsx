import React, { useState } from 'react'
import './save.css'
import { useSelector, useDispatch } from "react-redux";
import { BsTextIndentLeft, BsFillHeartFill, BsFillBookmarkStarFill, BsFillStarFill } from 'react-icons/bs';
// import { Link, useLocation } from 'react-router-dom';


export default function NavSavBtn({massiv}) {
    const disPatch = useDispatch()
    // const store = useSelector(store => store.reducerState)
    const [nav, setNav] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    
    
    function AddFun(item) {
       console.log(item.id , "men AddFun keldim");
       disPatch({type:'addItem', payload:item})
    }
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    
        // 👇️ or set to true
        // setIsActive(true);
      };
    const handleClick1 = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    
        // 👇️ or set to true
        // setIsActive(true);
      };
    
    
  return (
    <div>
        <div>
            <div onClick={() => setNav(!nav)} className='saveBlock22 position-absolute'>
                <div style={{ width: '25px', height: '25px', background: '#ffffffa0', borderRadius: '50%', marginLeft: '128px', marginTop: '5px' }} className='saveCircle'>
                    <div style={{ paddingTop: '10px', paddingLeft: '2px', gap: '2px' }} className='kattaDiv d-flex '>
                        <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%' }} className='kichkinaDiv'></div>
                        <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%' }} className='kichkinaDiv'></div>
                        <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%' }} className='kichkinaDiv'></div>
                    </div>
                </div>
                {
                    (nav) ?

                        <div className='saveCard '>
                            <ul style={{ marginLeft: '-20px' }} >
                                <li className='SaveIcons'><BsTextIndentLeft />Add to list</li>
                                <li className='SaveIcons' onClick={handleClick} ><BsFillHeartFill onClick={()=>AddFun(massiv)} style={{
                                        color: isActive ? 'red' : '',
                                        // color: isActive ? 'white' : '',
                                    }} />Favorite</li>
                                <li className='SaveIcons'><BsFillBookmarkStarFill  />Watchlist</li>
                                <li className='SaveIcons'><BsFillStarFill />You rating</li>
                            </ul>
                        </div>
                        :
                        <div className="">
                            
                        </div>
                }
            </div>
        </div>
    </div>
  )
}
