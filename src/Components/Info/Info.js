import React, { useState } from 'react'
import './Info.css'
import bx1 from '../../assets/Box1.png'
import bx2 from '../../assets/Box2.png'
import bx3 from '../../assets/Box3.png'
import { Link } from 'react-router-dom'

export default function Info() {
   const [myclass, setmyClass] = useState('hide')

   let handleShow = () => {
        const y = window.scrollY;
        if (y >= 500) {
            setmyClass("show")
        } else {
            setmyClass("hide")
        }
    };
   
window.addEventListener("scroll", handleShow);
  return (
      <div className='Info'>
          <h1 className='Heading'>What is Dyna-Mark</h1>
          <div className='boxes'>
              <div className={`${myclass}`} style={{ transition: "all 1s" }}>
                  <div className='art' style={{ backgroundImage: `url(${bx1})`, backgroundPosition: "center"}}>
                </div>
                <h1>What Is Dyna-Mark</h1>
                <p>Dyna-Mark takes saving bookmarks to a whole new level. The ability to find exactly what you need easily through search or categories makes Dyna-Mark more efficient then any bookmark system in your browser!</p>
              <Link to={"/discover"}><div className='box-button'>See More</div></Link>  
              </div>
              <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                  <div className='art' style={{ backgroundImage: `url(${bx2})`, backgroundPosition: "center" }}>
                 </div>
                  <h1>Share Your Favorites!</h1>
                  <p>Share resources/websites that helped you while coding. Add tags </p>
                  <Link to={"/newbookmark"}><div className='box-button'>Create!</div></Link>  
              </div>
          </div>
      </div>
  )
}
