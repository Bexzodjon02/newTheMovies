import React, { useState } from 'react'
import './save.css'
import { useDispatch } from "react-redux";
import { BsTextIndentLeft, BsFillHeartFill, BsFillBookmarkStarFill, BsFillStarFill } from 'react-icons/bs';
// import { Link, useLocation } from 'react-router-dom';


export default function SaveBtn({ massiv }) {
    const disPatch = useDispatch()
    const [nav, setNav] = useState(false)
    // const [reds, setReds] = useState("red")
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);

    function AddFun(item) {
        // console.log('ishladim', item);
        disPatch({ type: "addItem", payload: item })
    }
    function AddWatchList(item) {
        // console.log('Qatchlistdan kelyapman', item);
        disPatch({ type: "addItem", payload: item })
    }
    
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    
        // 👇️ or set to true
        // setIsActive(true);
      };
      function handleClick1 () {
        setIsActive1(current => !current)
      }


    return (
        <div>
            <div>
                <div onClick={() => setNav(!nav)} className='saveBlock position-absolute'>
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
                                    {/* <li className='SaveIcons'><Link to={/savedata/${massiv.id}} ><BsFillHeartFill  />Favorite</Link></li> */}
                                    <li className='SaveIcons' onClick={handleClick} ><BsFillHeartFill onClick={() => AddFun(massiv)} style={{
                                        color: isActive ? 'red' : '',
                                        // color: isActive ? 'white' : '',
                                    }} />Favorite</li>
                                    <span className='SaveIcons'  onClick={handleClick1} ><BsFillBookmarkStarFill onClick={() => AddWatchList(massiv)} style={{
                                        color: isActive1 ? 'green' : '',
                                        // color: isActive ? 'white' : '',
                                    }} />Watchlist</span>
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
