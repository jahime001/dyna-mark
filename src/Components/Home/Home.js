// import React from 'react'
import './Home.css'
import bck from '../../assets/homebck.png'
import { useEffect, useState } from 'react';

export default function Home({ topMarks }) {
  
//  function orderMarks(){
//    bookmarks.sort((a, b) => {
//      return a.likes - b.likes
//    })
//  }
//   useEffect(()=>{
//     orderMarks()
//   }, [])

  return (
    <div className='home'>
      <div className='welcome' style={{ backgroundImage: `url(${bck})` }}>
        <h1>Dyna-Mark</h1>
        <h3>The <span>Coding</span> Cheat-Sheet</h3>
        <p><span>Dyna</span>mically book<span>mark</span> your favorite coding websites and discover new ones to help you on your journey!</p>
        <div className='discover'><h1>Discover</h1></div>
      </div>
    </div>
  )
}
