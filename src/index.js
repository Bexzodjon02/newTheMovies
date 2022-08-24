import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.css";
import {Provider} from 'react-redux'
import store from "./actions/store";

import Navbar from "./Navbar/Navbar.jsx";
import Popular from './companents/Popular/Popular';
import NowPlaying from './companents/nowPlaying/NowPlaying';
import UpComing from './companents/upComing/UpComing';
import TopRated from './companents/topRated/TopRated';
import IdDetails from './IdDetails/IdDetails';
import LikeSav from './likeSav/LikeSav';
import Actors from './companents/actors/Actors';
import IdActors from './IdDetails/IdActors';
import Watchlist from './likeSav/WatchList';
import Search from './Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />}>
              <Route index element={<Navbar/>}/>
              <Route path='/popular' element={<Popular/>}/>
              <Route path='/nowplaying' element={<NowPlaying/>}/>
              <Route path='/upcoming' element={<UpComing/>}/>
              <Route path='/toprated' element={<TopRated/>}/>
              
              <Route path='/details/:id' element={<IdDetails/>}/>
              <Route path='/likesave' element={<LikeSav/>}/>
              <Route path='/watchlist' element={<Watchlist/>}/>
              
              <Route path='/actors' element={<Actors/>}/>
              <Route path='/idactors/:id' element={<IdActors/>}/>
              <Route path='/search/:id' element={<Search/>}/>
              
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
