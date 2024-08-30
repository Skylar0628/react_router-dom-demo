import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const api = `https://api.unsplash.com/photos`

const AlbumPhoto = () => {
  const {id} = useParams();
  const [photo, setPhoso] = useState({});

  useEffect(()=>{
    (async()=>{
      const res = await axios.get(`${api}/${id}/?client_id=${accessKey}`)
      setPhoso(res.data)
    })()
  },[id])

  return (
    <div>
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} className='img-fluid' alt="" />
    </div>
  )
}

export default AlbumPhoto
