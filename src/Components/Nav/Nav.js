import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Logo from '../../assets/DynaV2.png'
import useLocalStorage from 'use-local-storage'

export default function Nav({theme, setTheme, defaultDark, switchTheme} ) {

  // //Setup for Dark mode begins here
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme)
  // }


  return (
    <div className='NavBar'>
        <div className='NavLogo'>
            <img src={Logo} alt='Logo' className='logo'/>
        </div>
        <button className='theme-button' onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : "Light"} Theme
        </button>
        <div className='NavLinks'>
            <Link to='/'>Home</Link>
            <Link to='/discover'>Discover</Link>
            <Link to='/newbookmark'>New bookmark</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}
