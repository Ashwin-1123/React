import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'
import { Qrcode } from './components/Qrcode'
import {Cart} from './formsamples/Cart'
import { Userdetails } from './formsamples/Userdetails'
import { Index } from './components/Index'
import { AdviceApp } from './formsamples/AdviceApp'
import { Regform } from './components/Regform';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/qrcode" element={<Qrcode/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/regform" element={<Regform/>}/>
    <Route path="/index" element={<Index/>}/>
    <Route path="/adviceapp" element={<AdviceApp/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
