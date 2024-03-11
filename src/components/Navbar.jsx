import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';


export const Navbar = () => {
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);
   
    //navbarr toggle icon
    const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle collapse state
  };

  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-blue h-100' >
    <div className='container-fluid'>
        <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show':''}`} id='Open' >
            <ul className='navbar-nav me-auto'>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/cards">Cards</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/index">Index</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="/qrcode">Qrcode</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="/regform">Regform</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="/adviceapp">AdviceApp</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="/cart">Cart</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</>
  )
}
