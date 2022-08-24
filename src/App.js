import './App.css';
import { Link, Outlet } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { VscBellDot } from 'react-icons/vsc';
import { BsFillHeartFill } from 'react-icons/bs';
import {useSelector} from 'react-redux'

function App() {
let boshMassiv = useSelector(state =>state.getItem)
  return (
    <div className="App ">
         <div className='header  d-flex'>
         <div className='container HeadCon'>
         <Link to={'/'}> <img width='200px'style={{marginTop:'10px'}} src='./TMDBlogo.svg'/></Link>
         <ul id='menuItem'>
              <li className='now'><a href=''>Movies</a>
                <div className='menu2' style={{textAlign:'left',padding:'10px',width:'130px'}}>
                  {<Link className='menu3' to={'/popular'} style={{color:'black'}}>Popular</Link>}<br />
                 
                  {<Link className='menu3' to={'/nowplaying'}  style={{color:'black'}}>No Pplaying</Link>}<br />
                  {<Link className='menu3' to={'/upcoming'}  style={{color:'black'}}>Up Coming</Link>}<br/>
                  {<Link className='menu3' to={'/toprated'}  style={{color:'black'}}> Top Rated </Link>}
                </div>
           
              </li>
              <li className='now'><a href=''>TV Shows</a>
              <div className='menu2' style={{textAlign:'left',padding:'10px'}}>
                  {<Link className='menu3' to={'/popular'} style={{color:'black'}}>Popular</Link>}<br />
                 
                  {<Link className='menu3' to={'/nowplaying'}  style={{color:'black'}}>No Pplaying</Link>}<br />
                  {<Link className='menu3' to={'/upcoming'}  style={{color:'black'}}>Up Coming</Link>}
                  {<Link className='menu3' to={'/toprated'}  style={{color:'black'}}> Top Rated </Link>}
                </div>
              </li>
              <li className='now'><a href=''>People</a>
                <div className='menu2'>
                  {<Link className='menu3 my-5' style={{color:'black'}} to={'/actors'}>Popular People</Link>}<br />
                  
                  
                </div>
              </li>
              <li className='now'><a href=''>More</a>
                <div className='menu2'>
                  {<Link className='menu3' style={{color:'black'}} to={'/moviPage'}> Popular People</Link>}<br />
                  <hr/>
                  {<Link className='menu3' style={{color:'black'}} to={'/moviPage:id'}>movePak</Link>}<br />
                  <hr/>
                  {<Link className='menu3' style={{color:'black'}} to={'/details:id'}>ID Details</Link>}
                  <hr/>
                  {<Link className='menu3' style={{color:'black'}} to={'/watchlist'}>WatchList</Link>}<br />
                </div>
              </li>
            </ul>
            
            <ul id='menuNav'>
              <li style={{color:'#fff', fontSize:'25px'}}>+</li>
              <li style={{border:'2px solid white', fontSize:'10px', padding:'5px'}}>UZ</li>
              <li style={{color:'#fff', fontSize:'25px'}}><VscBellDot /></li> 
              <li style={{width:'35px',height:'35px', borderRadius:'50%',background:'#EA148C',fontWeight:'500', fontSize:'20px', padding:'5px',paddingLeft:'10px'}} >B</li>
              <li style={{color:'#fff', fontSize:'25px'}}><span style={{width:'18px',padding:'0 3px 5px 2px',position:'absolute',height:'18px',background:'red',fontSize:'12px',borderRadius:'50%',marginLeft:'18px',textAlign:'center'}}>{boshMassiv.length}</span><Link style={{listStyle:'none',color:'white'}} to={'/likesave'}><BsFillHeartFill /></Link></li>
              <li style={{color:'#01b4e4', fontSize:'20px'}}><FaSearch /></li>
            </ul>
         </div>
         </div>
      <Outlet  />
    </div>
  );
}

export default App;
// <Link to={'/popular'}>popular</Link>
// <Link to={'/upcoming'}>upcoming</Link>
// <Link to={'/toprated'}>toprated</Link>
// <Link to={'/nowplaying'}>nowplaying</Link> 