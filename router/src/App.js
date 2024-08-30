import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Albumlayout from './Pages/Albumlayout';
import Albumindex from './Pages/Albumindex';
import AlbumPhoto from './Pages/AlbumPhoto';
import ALbumsearch from './Pages/ALbumsearch';
import NotFind from './Pages/NotFind';


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container mt-3' >
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/album' element={<Albumlayout/>}>
              <Route path='index' element={<Albumindex/>}/>
              <Route path='search' element={<ALbumsearch/>}/>
              <Route path=':id' element={<AlbumPhoto/>}/>
            </Route>
            <Route path='*' element={<NotFind/>}></Route>
         </Routes>
      </div>
    </div>
  )
}

export default App
