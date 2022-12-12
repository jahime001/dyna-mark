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
            <Link to='/'>Home</Link>
            <Link to='/discover'>Discover</Link>
            <Link to='/newbookmark'>New bookmark</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}
