import React, { useEffect, useState,  } from 'react'
import { Outlet,Link } from 'react-router-dom';
import axios from 'axios';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const api = `https://api.unsplash.com/search/photos`

const Albumlayout = () => {
    const [list, setList] = useState([]);
 
useEffect(()=>{
  (async()=>{
   const res =  await axios.get(`${api}?client_id=${accessKey}&query=animal`)
   const {results} =res.data;
   setList(results);
  })()
},[])

  return (
    <div className='row'>
      <div className='col-4'>
        <Link to="search">搜尋頁面</Link>
        {list.map((item, index)=>(
            <li key={index}>
              <Link to={item.id}>{item.id}</Link>    
            </li>
        ))}
      </div>
      <div className='col-8'>
        <Outlet context={list}/>
      </div>
    </div>
  )
}

export default Albumlayout
