import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div className='NavBar'>
        <Link to='/About'>About</Link>
        <Link to='/Discover'>Discover</Link>
        <Link to='/Home'>Home</Link>
        <Link to='/NewBookmark'>New Bookmark</Link>
    </div>
  )
}
