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
            <Link to='/'><a>Home</a></Link>
            <Link to='/discover'><a>Discover</a></Link>
            <Link to='/newbookmark'><a>New Bookmark</a></Link>
            <Link to='/about'><a>About</a></Link>
        </div>
    </div>
  )
}
