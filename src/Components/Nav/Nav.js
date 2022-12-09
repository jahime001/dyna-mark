import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Logo from '../../assets/DynaV2.png'

export default function Nav() {
  return (
    <div className='NavBar'>
        <div className='NavLogo'>
            <img src={Logo} alt='Logo' className='logo'/>
        </div>
        <div className='NavLinks'>
            <Link to='/Home'><a>Home</a></Link>
            <Link to='/Discover'><a>Discover</a></Link>
            <Link to='/NewBookmark'><a>New Bookmark</a></Link>
            <Link to='/About'><a>About</a></Link>
        </div>
    </div>
  )
}
