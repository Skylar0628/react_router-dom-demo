import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom';


const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const api = `https://api.unsplash.com/search/photos`

const ALbumsearch = () => {
  const [search, setSearch] = useState('');
  const [list,setList] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();


  useEffect(()=>{
    if(search !== ''){
      (async()=>{
        const res = await axios.get(`${api}?client_id=${accessKey}&query=${search}`)
        const {results} =res.data;
        setList(results);
      })()
    }
  },[search]);

  useEffect(()=>{
    setSearch(SearchParams.get('query'))
  },[SearchParams])

  return (
    <div>
      <h6>搜尋</h6> 
      <input 
        type="text" 
        className='form-control' 
        defaultValue={search} 
        onKeyUp={(e)=>{
           if(e.code === 'Enter'){
            setSearchParams({query: e.target.value})
           }
        }}
        />
         {list.map((item, index)=>(
            <li key={index}>
              <Link to={`/album/${item.id}`}>{item.id}</Link>    
            </li>
        ))}
      
    </div>
  )
}

export default ALbumsearch
