import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const NotFind = () => {
  const Navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
        Navigate('/')
    }, 2000);
  },[Navigate]);

  return (
    <div>
       不存在的頁面
    </div>
  )
}

export default NotFind
