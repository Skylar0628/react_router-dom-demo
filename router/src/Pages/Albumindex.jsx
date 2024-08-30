import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Albumindex = () => {
 const list = useOutletContext();
 
  return (
    <div>
        {list.map((item,index)=>(
            <li key={index}>{item.id}</li>
        ))}
    </div>
  )
}

export default Albumindex
