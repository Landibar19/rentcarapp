import './Styles.scss';
import React, { useState } from 'react';

import {BiMenuAltLeft} from 'react-icons/bi';
import {AiOutlineCloseCircle, AiOutlineWhatsApp} from 'react-icons/ai';

import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';


const NavBar = () => {
  
  const [showMenu, setShowMenu ] = useState(false)
  const menuToggle = () => setShowMenu(!showMenu)
  return (
    <div className='header'>
      <div className='header_content'>
        <div className='header_logo'>
        <Link to="/">
          <img src={logo} alt=''/>
          </Link>
          <div className='header_button'>
          <button className='header_toggler' onClick={menuToggle}>
            {!showMenu ? <BiMenuAltLeft/> : <AiOutlineCloseCircle />}
          </button>
        </div>
        </div>
        <div>
          <nav className={`${`nav`} ${showMenu ? [`nav--open`]: {}}`}>
            <a className='nav_item' href="/">Home</a>
            <a className='nav_item' href="/vehicles">Vehicles</a>
            <a className='nav_item' href="/about">About</a>
            <a className='nav_item' href="/contact_us">Contact</a>
            <a className='nav_item' href="/our_team">Our Team</a>
          </nav>
          <div className='header_call'>
            <p>WhatsApp</p>
            <p>+355699892400</p>
           <a href="https://wa.me/+355699892400">
            <AiOutlineWhatsApp/>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default NavBar;
