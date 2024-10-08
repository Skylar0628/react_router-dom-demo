import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive})=>`nav-link ${isActive? 'active':''}`} to="/" >首頁</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/about">關於我們</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/album">相簿</NavLink>
                        </li>
                    </ul>
                  
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar
