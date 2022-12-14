import { React, Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Logo from '../../assets/DynaV2.png'
import useLocalStorage from 'use-local-storage'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrClose} from 'react-icons/gr'
import {BsSunFill} from 'react-icons/bs'
import {BsMoonFill} from 'react-icons/bs'


export default function Nav({theme, setTheme, defaultDark, switchTheme} ) {
const [showNav, setShowNav] = useState(false)
 const handleShowNavbar = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='navBar-container'>

  
    <div className='NavBar'>
        <div className='NavLogo'>
            <img src={Logo} alt='Logo' className='logo'/>
        </div>
        <button className='theme-button' onClick={switchTheme}>
        {theme === 'light' ? <BsSunFill /> : <BsMoonFill />}
        </button>
        
        </div>
        <div className='nav-icons'>
          {(showNav === false)?
            <RxHamburgerMenu onClick={handleShowNavbar} className='nav-icon'/>:
            <GrClose onClick={handleShowNavbar} className='nav-icon'/>
          }
        </div>
        <div className={`NavLinks ${showNav && 'active'}`}>
            <Link to='/' onClick={handleShowNavbar}>Home</Link>
            <Link to='/discover' onClick={handleShowNavbar}>Discover</Link>
            <Link to='/newbookmark' onClick={handleShowNavbar}>New bookmark</Link>
            <Link to='/about' onClick={handleShowNavbar}>About</Link>
        </div>
    
    </div>
  )
}
