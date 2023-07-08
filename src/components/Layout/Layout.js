import React from 'react'
import './Layout.scss';
import { images } from "../../constants";
import { AboutInfo } from '../../constants/Data';
import { Route, Routes } from 'react-router-dom';
import {About, Home, Shop} from "../../components";

function Layout() {
  return (
    <main className='layout'>
        <section className="home-hero">
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/shop' element={<Shop /> } />
                <Route path='/about' element={<About /> } />
            </Routes>
        </section>
        <section className="about">
            <img src={images.aboutDark} alt="about" />
           <div className="about-info">
            <h3>{AboutInfo.title}</h3>
            <p>
                {AboutInfo.describe}
            </p>
           </div>
            <img src={images.aboutLight} alt="about" />
        </section>
    </main>
  )
}

export default Layout