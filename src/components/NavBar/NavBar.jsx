import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'

const NavBar = () => {

    const [menu, setMenu] = useState('home')
  return (
    <div className='nav-bar'>
             <img src={assets.logo} alt="" className="logo" />
       <ul className="nav-bar-menu">
        <li onClick={() => setMenu('home')} className={menu === 'home'? 'active' : ''}>Home</li>
        <li onClick={() => setMenu('menu')} className={menu === 'menu'? 'active' : ''}>Menu</li>
        <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app'? 'active' : ''}>Mobile-App</li>
        <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us'? 'active' : ''}>Contact Us</li>
       </ul>
       <div className="nav-bar-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-bar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
       </div>
    </div>
  )
}

export default NavBar
